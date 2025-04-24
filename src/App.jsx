import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChatBot from './Components/ChatBot/ChatBot'
import Presentation from './Components/Presentation/Presentation'

function App() {

  return (
    <div className="App">
      <Presentation/>
      <ChatBot/>
    </div>

  )
}

export default App
