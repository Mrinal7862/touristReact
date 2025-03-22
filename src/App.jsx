import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, Link } from 'react-router-dom'
import {About, Home, Destination, Contact, Blog} from './Pages/index.js'
import  {Header, Footer, Navbar} from './Components/index.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Outlet/>
    </>
  )
}

export default App
