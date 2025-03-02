import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="http://localhost:3000">Todo Manaement Application</a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink to="/todos" className="nav-link">Todos</NavLink>
              </li>
            </ul>
          </div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <NavLink to="/register" className="nav-link">Register</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/login" className="nav-link">Login</NavLink>
            </li>
          </ul>

        </nav>
      </header>
    </div>
  )
}

export default HeaderComponent