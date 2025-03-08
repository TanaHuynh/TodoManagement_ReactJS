import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListToDoComponent from './component/ListToDoComponent'
import HeaderComponent from './component/HeaderComponent'
import FooterComponent from './component/FooterComponent'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import TodoComponent from './component/TodoComponent'
import RegisterComponent from './component/RegisterComponent'
import LoginComponent from './component/LoginComponent'
import { isUserLoggedIn } from './service/AuthService'

function App() {

  function AuthenticatedRoute({ children }) {

    const isAuth = isUserLoggedIn();

    if (isAuth) {
      return children;
    }

    return <Navigate to="/" />

  }

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* http://localhost:8080 */}
          <Route path='/' element={<LoginComponent />} ></Route>

          {/* http://localhost:8080/todos */}
          <Route path='/todos' element={
            <AuthenticatedRoute>
              <ListToDoComponent />
            </AuthenticatedRoute>
          } ></Route>

          {/* http://localhost:8080/add-todo */}
          <Route path='/add-todo' element={
            <AuthenticatedRoute>
              <TodoComponent />
            </AuthenticatedRoute>
          } ></Route>

          {/* http://localhost:8080/update-todo/1 */}
          <Route path='/update-todo/:id' element={
            <AuthenticatedRoute>
              <TodoComponent />
            </AuthenticatedRoute>} ></Route>

          {/* http://localhost:8080/register */}
          <Route path='/register' element={<RegisterComponent />} ></Route>

          {/* http://localhost:8080/login */}
          <Route path='/login' element={<LoginComponent />} ></Route>

        </Routes>
        <FooterComponent />

      </BrowserRouter>
    </>
  )
}

export default App
