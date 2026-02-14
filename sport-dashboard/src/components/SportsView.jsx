import React, { useState } from 'react'

export default function SportsView({ sports, onAddSport }) {
    const [name, setName] = useState('')
    const [type, setType] = useState('Team')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name.trim()) return
        onAddSport({
            name: name.trim(),
            description: description.trim(),
            individual: type === 'Individual'
        })
        setName('')
        setDescription('')
    }

    return (
        <div className="card stretch stretch-full">
            <div className="card-body">
                <ul className="nav nav-pills mb-4" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-list-tab" data-bs-toggle="pill" data-bs-target="#pills-list" type="button">Catalog</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-add-tab" data-bs-toggle="pill" data-bs-target="#pills-add" type="button">Add New Sport</button>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-list">
                        <div className="table-responsive">
                            <table className="table table-hover align-middle">
                                <thead className="table-light">
                                    <tr>
                                        <th>ID</th>
                                        <th>Sport Name</th>
                                        <th>Type</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sports.map((s) => (
                                        <tr key={s.sportId}>
                                            <td>#{s.sportId}</td>
                                            <td>
                                                <span className="fw-bold text-dark">{s.name}</span>
                                            </td>
                                            <td>
                                                <span className={`badge ${s.individual ? 'bg-soft-success text-success' : 'bg-soft-primary text-primary'}`}>
                                                    {s.individual ? 'Individual' : 'Team Sport'}
                                                </span>
                                            </td>
                                            <td className="text-muted text-truncate" style={{ maxWidth: '300px' }}>{s.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-add">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="border rounded p-4">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label">Sport Name</label>
                                            <input className="form-control" value={name} onChange={e => setName(e.target.value)} required placeholder="e.g. Rugby" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Type</label>
                                            <div className="d-flex gap-4">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="sportType" id="teamRadio" checked={type === 'Team'} onChange={() => setType('Team')} />
                                                    <label className="form-check-label" htmlFor="teamRadio">Team Sport</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="sportType" id="indivRadio" checked={type === 'Individual'} onChange={() => setType('Individual')} />
                                                    <label className="form-check-label" htmlFor="indivRadio">Individual Sport</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">Description</label>
                                            <textarea className="form-control" rows="3" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                                        </div>
                                        <button className="btn btn-primary" type="submit">Add Sport to Catalog</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
