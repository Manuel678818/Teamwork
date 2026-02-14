import React from 'react'

export default function ProfileView({ user }) {
    return (
        <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="card stretch stretch-full">
                    <div className="card-body">
                        <div className="text-center mb-4">
                            <div className="avatar-text avatar-xl bg-primary text-white rounded-circle fs-1 mx-auto mb-3" style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {user.name.charAt(0).toUpperCase()}
                            </div>
                            <h3 className="fw-bold">{user.name}</h3>
                            <span className="badge bg-soft-primary text-primary fs-12 text-uppercase px-3 py-1">{user.role}</span>
                        </div>

                        <div className="row g-4 mt-2">
                            <div className="col-md-6">
                                <div className="p-3 border rounded bg-light">
                                    <small className="text-muted d-block mb-1">Full Name</small>
                                    <span className="fw-bold text-dark">{user.name}</span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="p-3 border rounded bg-light">
                                    <small className="text-muted d-block mb-1">Email</small>
                                    <span className="fw-bold text-dark">{user.name.toLowerCase()}@example.com</span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="p-3 border rounded bg-light">
                                    <small className="text-muted d-block mb-1">Role</small>
                                    <span className="fw-bold text-dark text-capitalize">{user.role}</span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="p-3 border rounded bg-light">
                                    <small className="text-muted d-block mb-1">Language</small>
                                    <span className="fw-bold text-dark">{user.language || 'English'}</span>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="p-3 border rounded bg-light">
                                    <small className="text-muted d-block mb-1">Bio</small>
                                    <p className="mb-0 text-muted">
                                        Passionate sports administrator with over 5 years of experience in managing athlete rosters and organizing sports events.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
