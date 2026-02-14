import React, { useState } from 'react'

export default function SpecialtiesView({ specialties, onAddSpecialty }) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name.trim()) return
        onAddSpecialty({ name: name.trim(), description: description.trim() })
        setName('')
        setDescription('')
    }

    return (
        <div className="row">
            <div className="col-lg-4">
                <div className="card stretch stretch-full">
                    <div className="card-header">
                        <h5 className="card-title">Add New Specialty</h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input
                                    className="form-control"
                                    placeholder="e.g. Computer Science"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea
                                    className="form-control"
                                    placeholder="Short description..."
                                    rows="3"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                            </div>
                            <button className="btn btn-primary w-100" type="submit">
                                <i className="feather-plus me-2"></i> Create Specialty
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="col-lg-8">
                <div className="card stretch stretch-full">
                    <div className="card-header">
                        <h5 className="card-title">Specialties List</h5>
                    </div>
                    <div className="card-body">
                        <div className="row g-3">
                            {specialties.map((s) => (
                                <div key={s.SpecialtyId} className="col-md-6">
                                    <div className="border rounded p-3 h-100 position-relative bg-light-hover hover-primary transition-all">
                                        <div className="d-flex justify-content-between align-items-start mb-2">
                                            <h6 className="fw-bold mb-0 text-dark">{s.name}</h6>
                                            <span className="badge bg-light text-muted border">#{s.SpecialtyId}</span>
                                        </div>
                                        <p className="text-muted fs-12 mb-0">{s.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
