import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChatBot from './Components/ChatBot/ChatBot'
import Presentation from './Components/Presentation/Presentation'

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <div className="presentation-container">
          <Presentation/>
        </div>
        <div className="chatbot-container">
          <ChatBot/>
        </div>
      </div>
    </div>
  )
}

export default App
