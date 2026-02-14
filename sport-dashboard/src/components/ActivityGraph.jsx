import React, { useMemo } from 'react'

export default function ActivityGraph({ athletes, sports }) {
    // Calculate Pie Chart Data
    const chartData = useMemo(() => {
        // 1. Initialize count map
        const counts = {}
        sports.forEach(s => counts[s.sportId] = 0)

        // 2. Count athletes
        athletes.forEach(a => {
            if (a.enrolledSports && Array.isArray(a.enrolledSports)) {
                a.enrolledSports.forEach(sportId => {
                    if (counts[sportId] !== undefined) {
                        counts[sportId]++
                    }
                })
            }
        })

        // 3. Format for chart (Take top 5 active sports + "Others")
        let formatted = sports.map((s, index) => ({
            name: s.name,
            count: counts[s.sportId] || 0,
            color: ['#00b894', '#0984e3', '#fab1a0', '#fdcb6e', '#6c5ce7', '#e17055'][index % 6]
        }))
            .filter(item => item.count > 0)
            .sort((a, b) => b.count - a.count)

        // Handle empty data
        if (formatted.length === 0) return []

        // Calculate percentages for Pie Slices
        const total = formatted.reduce((sum, item) => sum + item.count, 0)
        let cumulativePercent = 0

        return formatted.map(item => {
            const startPercent = cumulativePercent
            const percent = item.count / total
            cumulativePercent += percent

            return {
                ...item,
                percent,
                startPercent
            }
        })
    }, [athletes, sports])

    // Helper to calculate coordinates for SVG path
    const getCoordinatesForPercent = (percent) => {
        const x = Math.cos(2 * Math.PI * percent)
        const y = Math.sin(2 * Math.PI * percent)
        return [x, y]
    }

    return (
        <div className="card stretch stretch-full border-0 shadow-sm overflow-hidden" style={{ minHeight: '380px' }}>
            <div className="card-header bg-white border-bottom-0 pt-4 px-4">
                <h5 className="card-title fw-bold mb-1">Sport Distribution</h5>
                <p className="text-muted fs-12 mb-0">Athletes per sport (Pie Chart)</p>
            </div>
            <div className="card-body p-4 d-flex align-items-center justify-content-center">

                {chartData.length > 0 ? (
                    <div className="d-flex align-items-center gap-5 w-100 justify-content-center flex-wrap">
                        {/* SVG Pie Chart */}
                        <div style={{ width: '200px', height: '200px', position: 'relative' }}>
                            <svg viewBox="-1 -1 2 2" style={{ transform: 'rotate(-90deg)' }}>
                                {chartData.map((slice, index) => {
                                    const [startX, startY] = getCoordinatesForPercent(slice.startPercent)
                                    const [endX, endY] = getCoordinatesForPercent(slice.startPercent + slice.percent)

                                    // If slice is 100%, render a circle
                                    if (slice.percent === 1) {
                                        return (
                                            <circle key={index} cx="0" cy="0" r="1" fill={slice.color} />
                                        )
                                    }

                                    // Large arc flag
                                    const largeArcFlag = slice.percent > 0.5 ? 1 : 0

                                    const pathData = [
                                        `M 0 0`,
                                        `L ${startX} ${startY}`,
                                        `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
                                        `Z`
                                    ].join(' ')

                                    return (
                                        <path
                                            key={index}
                                            d={pathData}
                                            fill={slice.color}
                                            stroke="white"
                                            strokeWidth="0.02"
                                        />
                                    )
                                })}
                            </svg>
                            {/* Inner Circle for Donut Effect (Optional, currently removed for full Pie) */}
                        </div>

                        {/* Legend */}
                        <div>
                            {chartData.map((item, index) => (
                                <div key={index} className="d-flex align-items-center mb-2">
                                    <span
                                        className="d-inline-block rounded-circle me-2"
                                        style={{ width: '12px', height: '12px', backgroundColor: item.color }}
                                    ></span>
                                    <span className="text-muted fs-13 me-2">{item.name}</span>
                                    <span className="fw-bold fs-13">{Math.round(item.percent * 100)}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="text-center text-muted w-100">
                        <i className="feather-pie-chart fs-1 d-block mb-2 opacity-25"></i>
                        No data available to display
                    </div>
                )}

            </div>
        </div>
    )
}
