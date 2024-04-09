import React from 'react'
import './App.css'
import { Article, Brand, CTA, Navbar } from '../components'
import { Footer, Header, Possibility, Features, Blog } from '../containers'
function App() {


  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />


      </div>
      <Brand />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />

    </div>
  )
}

export default App
