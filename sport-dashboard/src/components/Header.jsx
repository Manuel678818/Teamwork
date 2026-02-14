import React, { useState } from 'react'

export default function Header({ user, onLogout, onNavigate }) {
    const [showDropdown, setShowDropdown] = useState(false)
    return (
        <header className="nxl-header">
            <div className="header-wrapper">
                <div className="header-left d-flex align-items-center gap-4">
                    <a href="#" className="nxl-head-mobile-toggler" id="mobile-collapse">
                        <div className="hamburger hamburger--arrowturn">
                            <div className="hamburger-box">
                                <div className="hamburger-inner"></div>
                            </div>
                        </div>
                    </a>
                    <div className="nxl-navigation-toggle">
                        <a href="#" id="menu-mini-button">
                            <i className="feather-align-left"></i>
                        </a>
                        <a href="#" id="menu-expend-button" style={{ display: 'none' }}>
                            <i className="feather-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="header-right ms-auto">
                    <div className="d-flex align-items-center gap-3">
                        <div className="dropdown nxl-h-item">
                            <a
                                href="#"
                                className="d-flex w-100 align-items-center gap-2 dropdown-item"
                                onClick={(e) => { e.preventDefault(); setShowDropdown(!showDropdown); }}
                            >
                                <div className="avatar-text avatar-md bg-primary text-white">
                                    {user.name.charAt(0).toUpperCase()}
                                </div>
                                <div className="d-none d-lg-block">
                                    <span className="d-block fs-13 fw-bold">{user.name}</span>
                                    <span className="d-block fs-11 text-muted text-uppercase">{user.role}</span>
                                </div>
                                <i className={`feather-chevron-${showDropdown ? 'up' : 'down'}`}></i>
                            </a>
                            {showDropdown && (
                                <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown show" style={{ position: 'absolute', right: 0, top: '100%' }}>
                                    <a href="#" className="dropdown-item" onClick={(e) => { e.preventDefault(); onNavigate('profile'); setShowDropdown(false); }}>
                                        <i className="feather-user"></i>
                                        <span>Profile</span>
                                    </a>
                                    <a href="#" className="dropdown-item" onClick={(e) => { e.preventDefault(); onNavigate('settings'); setShowDropdown(false); }}>
                                        <i className="feather-settings"></i>
                                        <span>Settings</span>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item" onClick={(e) => { e.preventDefault(); onLogout(); }}>
                                        <i className="feather-log-out"></i>
                                        <span>Logout</span>
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
