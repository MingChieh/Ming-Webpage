import React, { useState } from 'react'
import './App.css'
import MainPage from './components/MainPage'
import Menu from './components/Menu'
import Playground from './components/Playground'
import Contact from './components/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState('main')

  const renderPage = () => {
    switch (currentPage) {
      case 'main':
        return <MainPage />
      case 'playground':
        return <Playground />
      case 'contact':
        return <Contact />
      default:
        return <MainPage />
    }
  }

  return (
    <div className="app">
      <Menu currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className="content">
        {renderPage()}
      </div>
    </div>
  )
}

export default App
