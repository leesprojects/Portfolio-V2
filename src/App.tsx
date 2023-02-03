import { useState } from 'react'
import './App.css'
import MainPage from './components/pages/MainPage'
import AppNavbar from './components/Navbar/Navbar'
import ThreeJSScene from './components/3DScene/3DScene'
import AI from './components/ArtGenerator/AI'

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <MainPage/>
      {/* <div className="ThreeJS-Container">
        <ThreeJSScene/>
      </div> */}
      <AI/> 
    </div>
  )
}

export default App
