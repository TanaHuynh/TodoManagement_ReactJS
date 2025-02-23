import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListToDoComponent from './component/ListToDoComponent'
import HeaderComponent from './component/HeaderComponent'
import FooterComponent from './component/FooterComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import TodoComponent from './component/TodoComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
        <HeaderComponent/>
    <Routes>
      <Route path='/' element = {<ListToDoComponent/>} ></Route>
      <Route path='/todos' element = {<ListToDoComponent/>} ></Route>
      <Route path='/add-todo' element = {<TodoComponent/>} ></Route>

    </Routes>
    <FooterComponent/>

    </BrowserRouter>
    </>
  )
}

export default App
