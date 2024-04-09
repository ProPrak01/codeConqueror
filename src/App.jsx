import React from 'react'
import './App.css'
import {Article,Brand,CTA,Navbar} from '../components'
import {Footer, Header,Possibility,WhatGPT3,Features,Blog} from '../containers'
function App() {

  return (
    <div className='App'>
    <div className='gradient_bg'>
    <Navbar/>
    <Header/>
    </div>
    <Brand/>
    <CTA/>
    <Blog/>
    <WhatGPT3/>
    <Features/>
    <Possibility/>
   
   
    <Footer/>
    </div>

  )
}

export default App
