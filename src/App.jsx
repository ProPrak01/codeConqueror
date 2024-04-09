import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './../components/navbar/navbar';
import CTA from './../components/cta/cta';
import Blog from './../containers/blog/Blog';
import footer from './../containers/footer/footer';
import header from './../containers/header/header';
import features from './../containers/features/features';
import Home from './Home/Home';
function App() {

  return (
    <Router>
    
      <Navbar />
      <Routes >
        <Route path='/navbar' element={<Navbar />} />
        <Route path='/header' element={<header />} />
        <Route path='/cta' element={<CTA />} />
        <Route path='/' element={<Home />} />
        <Route path='/features' element={<features />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/footer' element={<footer />} />
      </Routes>
      <footer />
    </Router>
  )
}

export default App
