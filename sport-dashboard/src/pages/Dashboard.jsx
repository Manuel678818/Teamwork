import { useState, useMemo } from 'react'
import { Specialty as defaultSpecialty, sports as defaultSports, athletes as defaultAthletes, Level } from '../assets/utils/helpers'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import AthletesView from '../components/AthletesView'
import SpecialtiesView from '../components/SpecialtiesView'
import SportsView from '../components/SportsView'
import ActivityGraph from '../components/ActivityGraph'
import HeroSection from '../components/HeroSection'
import SettingsView from '../components/SettingsView'
import ProfileView from '../components/ProfileView'

export default function Dashboard({ user, onLogout }) {
  const [currentView, setCurrentView] = useState('dashboard')

  // Data State
  const [specialties, setSpecialties] = useState([...defaultSpecialty])
  const [sports, setSports] = useState([...defaultSports])
  const [athletes, setAthletes] = useState([...defaultAthletes])

  // UI State
  const [searchTerm, setSearchTerm] = useState('')
  const [theme, setTheme] = useState('light')
  const [language, setLanguage] = useState('en')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.body.setAttribute('data-theme', newTheme)
  }

  // Actions
  const addSpecialty = (spec) => {
    const newId = specialties.length ? Math.max(...specialties.map((s) => s.SpecialtyId)) + 1 : 1
    const newSpec = { SpecialtyId: newId, ...spec }
    setSpecialties((s) => [newSpec, ...s])
  }

  const addSport = (sport) => {
    const newId = sports.length ? Math.max(...sports.map(s => s.sportId)) + 1 : 1
    const newSport = { sportId: newId, ...sport }
    setSports(prev => [newSport, ...prev])
  }

  const addAthlete = (athlete) => {
    const newId = athletes.length ? Math.max(...athletes.map(a => a.id)) + 1 : 1
    const newAthlete = { id: newId, ...athlete }
    setAthletes(prev => [newAthlete, ...prev])
  }

  // Dashboard Stats
  const stats = {
    totalAthletes: athletes.length,
    totalSports: sports.length,
    totalSpecialties: specialties.length,
    topSport: sports[0]?.name // Dummy logic for now
  }

  const renderContent = () => {
    switch (currentView) {
      case 'athletes':
        return <AthletesView
          athletes={athletes}
          sports={sports}
          specialties={specialties}
          levels={Level}
          onAddAthlete={addAthlete}
        />
      case 'specialties':
        return <SpecialtiesView
          specialties={specialties}
          onAddSpecialty={addSpecialty}
        />
      case 'sports':
        return <SportsView
          sports={sports}
          onAddSport={addSport}
        />
      case 'settings':
        return <SettingsView
          theme={theme}
          toggleTheme={toggleTheme}
          language={language}
          setLanguage={setLanguage}
        />
      case 'profile':
        return <ProfileView user={{ ...user, language }} />
      case 'dashboard':
      default:
        return (
          <div className="row">
            <HeroSection user={user} searchTerm={searchTerm} onSearchChange={setSearchTerm} />

            {/* Stats Area */}
            <div className="col-xxl-8 col-12">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="card stretch stretch-full">
                    <div className="card-body d-flex align-items-center p-4">
                      <div className="stat-card-icon bg-soft-primary text-primary">
                        <i className="feather-users"></i>
                      </div>
                      <div>
                        <h3 className="mb-1 fw-bold">{stats.totalAthletes}</h3>
                        <p className="text-muted mb-0 fw-medium">Active Athletes</p>
                      </div>
                      <div className="ms-auto">
                        <span className="badge bg-soft-success text-success">+3 this week</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card stretch stretch-full">
                    <div className="card-body d-flex align-items-center p-4">
                      <div className="stat-card-icon bg-soft-warning text-warning">
                        <i className="feather-activity"></i>
                      </div>
                      <div>
                        <h3 className="mb-1 fw-bold">{stats.totalSports}</h3>
                        <p className="text-muted mb-0 fw-medium">Sports Categories</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card stretch stretch-full">
                    <div className="card-body d-flex align-items-center p-4">
                      <div className="stat-card-icon bg-soft-info text-info">
                        <i className="feather-list"></i>
                      </div>
                      <div>
                        <h3 className="mb-1 fw-bold">{stats.totalSpecialties}</h3>
                        <p className="text-muted mb-0 fw-medium">Specialties</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card stretch stretch-full">
                    <div className="card-body d-flex align-items-center p-4">
                      <div className="stat-card-icon bg-soft-danger text-danger">
                        <i className="feather-award"></i>
                      </div>
                      <div>
                        <h3 className="mb-1 fw-bold">12</h3>
                        <p className="text-muted mb-0 fw-medium">Upcoming Events</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Graph Area */}
            <div className="col-xxl-4 col-12 mb-4">
              <ActivityGraph athletes={athletes} sports={sports} />
            </div>
          </div>
        )
    }
  }

  return (
    <>
      <Sidebar activeView={currentView} onNavigate={setCurrentView} />
      <Header user={user} onLogout={onLogout} onNavigate={setCurrentView} />

      <main className="nxl-container">
        <div className="nxl-content">
          <div className="page-header">
            <div className="page-header-left d-flex align-items-center gap-2">
              <div className="page-header-title">
                <h5 className="m-b-10 text-capitalize">{currentView}</h5>
              </div>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item text-capitalize">{currentView}</li>
              </ul>
            </div>
          </div>

          <div className="main-content">
            {renderContent()}
          </div>
        </div>
      </main>
    </>
  )
}
