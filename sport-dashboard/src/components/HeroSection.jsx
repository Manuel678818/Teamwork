import React from 'react'

export default function HeroSection({ user, searchTerm, onSearchChange }) {
    return (
        <div className="col-12 mb-4">
            <div className="hero-card shadow-lg p-5" style={{
                background: 'linear-gradient(135deg, #00b894 0%, #0984e3 100%)',
                borderRadius: '20px',
            }}>
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <h1 className="display-5 fw-bold text-white mb-2">
                            Hello, {user?.name || 'Admin'}! 👋
                        </h1>
                        <p className="text-white-50 lead mb-4">
                            Welcome to your dashboard. Manage your athletes and sports efficiently.
                        </p>

                        <div className="position-relative">
                            <i className="feather-search position-absolute text-muted" style={{ left: '20px', top: '50%', transform: 'translateY(-50%)', fontSize: '20px' }}></i>
                            <input
                                type="text"
                                className="form-control form-control-lg border-0 shadow-sm"
                                placeholder="Search athletes, sports, specialties..."
                                style={{
                                    paddingLeft: '55px',
                                    height: '60px',
                                    borderRadius: '15px',
                                    fontSize: '16px'
                                }}
                                value={searchTerm}
                                onChange={(e) => onSearchChange(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-lg-4 d-none d-lg-block text-center">
                        <div style={{
                            background: 'rgba(255,255,255,0.15)',
                            backdropFilter: 'blur(5px)',
                            borderRadius: '20px',
                            padding: '20px',
                        }}>
                            <div className="d-flex align-items-center gap-3 text-white mb-3">
                                <div className="bg-white text-success rounded p-2">
                                    <i className="feather-check-circle fs-4"></i>
                                </div>
                                <div className="text-start">
                                    <h5 className="mb-0 fw-bold">System Status</h5>
                                    <small className="opacity-75">All services operational</small>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3 text-white">
                                <div className="bg-white text-warning rounded p-2">
                                    <i className="feather-calendar fs-4"></i>
                                </div>
                                <div className="text-start">
                                    <h5 className="mb-0 fw-bold">{new Date().toLocaleDateString()}</h5>
                                    <small className="opacity-75">Today's Date</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
