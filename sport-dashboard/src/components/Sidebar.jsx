import React from 'react'

export default function Sidebar({ activeView, onNavigate }) {
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: 'feather-airplay', section: 'Dashboards' },
        { id: 'athletes', label: 'Athletes', icon: 'feather-users', section: 'Catalog' },
        { id: 'specialties', label: 'Specialties', icon: 'feather-list', section: 'Catalog' },
        { id: 'sports', label: 'Sports', icon: 'feather-activity', section: 'Catalog' },
    ]

    const renderMenuItem = (item) => (
        <li key={item.id} className={`nxl-item ${activeView === item.id ? 'active' : ''}`}>
            <a href="#" className="nxl-link" onClick={(e) => { e.preventDefault(); onNavigate(item.id); }}>
                <span className="nxl-micon">
                    <i className={item.icon}></i>
                </span>
                <span className="nxl-mtext">{item.label}</span>
            </a>
        </li>
    )

    return (
        <nav className="nxl-navigation">
            <div className="navbar-wrapper">
                <div className="m-header">
                    <a href="#" className="b-brand d-flex align-items-center gap-2 text-decoration-none">
                        <div className="avatar-text bg-primary text-white rounded-3">
                            <i className="feather-activity"></i>
                        </div>
                        <span className="fw-bolder fs-4 text-dark tracking-wide">ISTAG SPORT</span>
                    </a>
                </div>
                <div className="navbar-content">
                    <ul className="nxl-navbar">
                        <li className="nxl-item nxl-caption">
                            <label>Navigation</label>
                        </li>
                        {menuItems.filter(i => i.section === 'Dashboards').map(renderMenuItem)}

                        <li className="nxl-item nxl-caption">
                            <label>Catalog</label>
                        </li>
                        {menuItems.filter(i => i.section === 'Catalog').map(renderMenuItem)}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
