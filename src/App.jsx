import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Learning from './components/Learning'
import Journey from './components/Journey'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Learning />
        <Journey />
      </main>
      <Footer />
    </div>
  )
}

export default App
