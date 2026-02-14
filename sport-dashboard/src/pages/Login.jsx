import { useState } from 'react'
import { users } from '../assets/utils/helpers'

export default function Login({ onLogin }) {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault() // Correctly prevent default form submission
    const found = users.find(
      (u) => u.name.toLowerCase() === name.trim().toLowerCase() && u.password === password,
    )
    if (found) {
      setError('')
      onLogin(found)
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <main className="auth-cover-wrapper">
      <div className="auth-cover-content-inner">
        <div className="auth-cover-content-wrapper">
          <div className="auth-img">
            <img src="/assets/images/auth/auth-cover-login-bg.svg" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="auth-cover-sidebar-inner">
        <div className="auth-cover-card-wrapper">
          <div className="auth-cover-card p-sm-5">
            <div className="wd-50 mb-5">
              <img src="/assets/images/logo-abbr.png" alt="" className="img-fluid" />
            </div>
            <h2 className="fs-20 fw-bolder mb-4">Login</h2>
            <h4 className="fs-13 fw-bold mb-2">Login to your account</h4>
            <p className="fs-12 fw-medium text-muted">
              Welcome back to <strong className="text-primary">ISTAG Sport Dashboard</strong>. Please sign in to continue.
            </p>
            <form onSubmit={handleSubmit} className="w-100 mt-4 pt-2">
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="rememberMe" />
                    <label className="custom-control-label c-pointer" htmlFor="rememberMe">
                      Remember Me
                    </label>
                  </div>
                </div>
                <div>
                  <a href="#" className="fs-11 text-primary">
                    Forget password?
                  </a>
                </div>
              </div>
              {error && <div className="alert alert-danger mt-3">{error}</div>}
              <div className="mt-5">
                <button type="submit" className="btn btn-lg btn-primary w-100">
                  Login
                </button>
              </div>
            </form>
            <div className="mt-5 text-muted">
              <span> Don't have an account?</span>
              <a href="#" className="fw-bold">
                Create an Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
