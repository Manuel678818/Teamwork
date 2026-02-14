import React from 'react'

export default function SettingsView({ theme, toggleTheme, language, setLanguage }) {
    return (
        <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="card stretch stretch-full">
                    <div className="card-header border-bottom">
                        <h5 className="card-title">System Settings</h5>
                    </div>
                    <div className="card-body">

                        {/* Appearance Section */}
                        <div className="mb-5">
                            <h6 className="fw-bold mb-3 text-uppercase text-muted fs-12">Appearance</h6>
                            <div className="d-flex align-items-center justify-content-between p-3 border rounded mb-3">
                                <div className="d-flex align-items-center gap-3">
                                    <div className={`avatar-text bg-soft-${theme === 'dark' ? 'warning' : 'dark'} text-${theme === 'dark' ? 'warning' : 'dark'}`}>
                                        <i className={`feather-${theme === 'dark' ? 'sun' : 'moon'}`}></i>
                                    </div>
                                    <div>
                                        <h6 className="mb-0 fw-bold">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</h6>
                                        <small className="text-muted">Switch application color theme</small>
                                    </div>
                                </div>
                                <div className="form-check form-switch">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={theme === 'dark'}
                                        onChange={toggleTheme}
                                        style={{ cursor: 'pointer', width: '3em', height: '1.5em' }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Language Section */}
                        <div className="mb-5">
                            <h6 className="fw-bold mb-3 text-uppercase text-muted fs-12">Language (Cameroon)</h6>
                            <div className="d-flex gap-3">
                                <div
                                    className={`border rounded p-3 flex-fill text-center cursor-pointer ${language === 'en' ? 'bg-primary text-white border-primary' : 'bg-light text-muted hover-bg-gray'}`}
                                    onClick={() => setLanguage('en')}
                                    style={{ cursor: 'pointer', transition: 'all 0.2s' }}
                                >
                                    <h5 className="mb-1">English</h5>
                                    <small className={language === 'en' ? 'text-white-50' : ''}>Official Language</small>
                                </div>
                                <div
                                    className={`border rounded p-3 flex-fill text-center cursor-pointer ${language === 'fr' ? 'bg-primary text-white border-primary' : 'bg-light text-muted hover-bg-gray'}`}
                                    onClick={() => setLanguage('fr')}
                                    style={{ cursor: 'pointer', transition: 'all 0.2s' }}
                                >
                                    <h5 className="mb-1">Français</h5>
                                    <small className={language === 'fr' ? 'text-white-50' : ''}>Langue Officielle</small>
                                </div>
                            </div>
                        </div>

                        {/* About Us Section */}
                        <div>
                            <h6 className="fw-bold mb-3 text-uppercase text-muted fs-12">About Us</h6>
                            <div className="bg-light p-4 rounded text-center">
                                <div className="mb-3">
                                    <div className="avatar-text bg-primary text-white rounded-3 mx-auto mb-2 fs-2">
                                        <i className="feather-activity"></i>
                                    </div>
                                    <h4 className="fw-bolder text-dark">ISTAG SPORT</h4>
                                </div>
                                <p className="text-muted mb-4">
                                    Sport Dashboard is a premier solution for managing athletes, sports catalogs, and performance tracking.
                                    Designed with love in Cameroon 🇨🇲.
                                </p>
                                <div className="d-flex justify-content-center gap-3">
                                    <a href="#" className="text-muted"><i className="feather-globe me-1"></i>Website</a>
                                    <a href="#" className="text-muted"><i className="feather-mail me-1"></i>Contact</a>
                                    <a href="#" className="text-muted"><i className="feather-github me-1"></i>Version 1.0.2</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
