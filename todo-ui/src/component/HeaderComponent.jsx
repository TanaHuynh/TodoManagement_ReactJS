import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { isUserLoggedIn, logout } from '../service/AuthService'

const HeaderComponent = () => {

  const isAuth = isUserLoggedIn();

  const navigator = useNavigate();

  function handleLogout() {
    logout();

    navigator('/login')
  }

  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="http://localhost:3000">Todo Management Application</a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {
                isAuth &&
                <li class="nav-item">
                  <NavLink to="/todos" className="nav-link">Todos</NavLink>
                </li>
              }
            </ul>
          </div>
          <ul class="navbar-nav">
            {
              !isAuth &&
              <li class="nav-item">
                <NavLink to="/register" className="nav-link">Register</NavLink>
              </li>
            }
            {
              !isAuth &&
              <li class="nav-item">
                <NavLink to="/login" className="nav-link">Login</NavLink>
              </li>
            }
            {
              isAuth &&
              <li class="nav-item">
                <NavLink to="/login" className="nav-link" onClick={handleLogout}>Logout</NavLink>
              </li>
            }
          </ul>

        </nav>
      </header>
    </div>
  )
}

export default HeaderComponent