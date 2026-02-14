import React, { useState } from 'react'

export default function AthletesView({ athletes, sports, specialties, levels, onAddAthlete }) {
    const [isAdding, setIsAdding] = useState(false)
    const [newAthlete, setNewAthlete] = useState({
        name: '',
        gender: 'Male',
        age: '',
        LevelId: '',
        SpecialtyId: '',
        enrolledSports: [],
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!newAthlete.name || !newAthlete.LevelId || !newAthlete.SpecialtyId) return
        onAddAthlete({
            ...newAthlete,
            age: parseInt(newAthlete.age) || 18,
            LevelId: parseInt(newAthlete.LevelId),
            SpecialtyId: parseInt(newAthlete.SpecialtyId)
        })
        setIsAdding(false)
        setNewAthlete({ name: '', gender: 'Male', age: '', LevelId: '', SpecialtyId: '', enrolledSports: [] })
    }

    const toggleSport = (sportId) => {
        setNewAthlete(prev => {
            const exists = prev.enrolledSports.includes(sportId)
            return {
                ...prev,
                enrolledSports: exists
                    ? prev.enrolledSports.filter(id => id !== sportId)
                    : [...prev.enrolledSports, sportId]
            }
        })
    }

    return (
        <div className="card stretch stretch-full">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="card-title">Athletes Roster</h5>
                <button className="btn btn-primary" onClick={() => setIsAdding(!isAdding)}>
                    <i className={`feather-${isAdding ? 'minus' : 'plus'} me-2`}></i>
                    {isAdding ? 'Cancel' : 'Add New Athlete'}
                </button>
            </div>
            <div className="card-body">
                {isAdding && (
                    <div className="mb-4 p-4 border rounded bg-light">
                        <h6 className="mb-3">New Athlete Registration</h6>
                        <form onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label">Full Name</label>
                                    <input
                                        className="form-control"
                                        value={newAthlete.name}
                                        onChange={e => setNewAthlete({ ...newAthlete, name: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label">Gender</label>
                                    <select
                                        className="form-select"
                                        value={newAthlete.gender}
                                        onChange={e => setNewAthlete({ ...newAthlete, gender: e.target.value })}
                                    >
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label">Age</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={newAthlete.age}
                                        onChange={e => setNewAthlete({ ...newAthlete, age: e.target.value })}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Level</label>
                                    <select
                                        className="form-select"
                                        value={newAthlete.LevelId}
                                        onChange={e => setNewAthlete({ ...newAthlete, LevelId: e.target.value })}
                                        required
                                    >
                                        <option value="">Select Level...</option>
                                        {levels.map(l => <option key={l.LevelId} value={l.LevelId}>{l.name} - {l.description}</option>)}
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Specialty</label>
                                    <select
                                        className="form-select"
                                        value={newAthlete.SpecialtyId}
                                        onChange={e => setNewAthlete({ ...newAthlete, SpecialtyId: e.target.value })}
                                        required
                                    >
                                        <option value="">Select Specialty...</option>
                                        {specialties.map(s => <option key={s.SpecialtyId} value={s.SpecialtyId}>{s.name}</option>)}
                                    </select>
                                </div>
                                <div className="col-12">
                                    <label className="form-label d-block">Enrolled Sports</label>
                                    <div className="d-flex flex-wrap gap-2">
                                        {sports.map(s => (
                                            <div
                                                key={s.sportId}
                                                onClick={() => toggleSport(s.sportId)}
                                                className={`badge border p-2 cursor-pointer ${newAthlete.enrolledSports.includes(s.sportId) ? 'bg-primary text-white' : 'bg-light text-dark'}`}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {s.name}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-12 text-end">
                                    <button type="submit" className="btn btn-success">Save Athlete</button>
                                </div>
                            </div>
                        </form>
                    </div>
                )}

                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Athlete</th>
                                <th>Details</th>
                                <th>Status</th>
                                <th>Sports</th>
                            </tr>
                        </thead>
                        <tbody>
                            {athletes.map((a) => (
                                <tr key={a.id}>
                                    <td>
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="avatar-text avatar-md bg-soft-primary text-primary font-weight-bold">
                                                {a.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="fw-bold fs-14">{a.name}</div>
                                                <div className="text-muted fs-12">{a.gender}, {a.age}y</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="fs-13">
                                            <span className="text-muted">Specialty:</span> <span className="fw-bold">{specialties.find(s => s.SpecialtyId === a.SpecialtyId)?.name || 'N/A'}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge bg-soft-info text-info">
                                            {levels.find((L) => L.LevelId === a.LevelId)?.name || 'N/A'}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-flex gap-1 flex-wrap">
                                            {a.enrolledSports.map((id) => {
                                                const sport = sports.find((s) => s.sportId === id)
                                                return (
                                                    <span key={id} className="badge bg-gray-200 text-dark border">
                                                        {sport?.name}
                                                    </span>
                                                )
                                            })}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
