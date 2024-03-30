import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './components/Homepage'
import Banner from './components/Banner'
import Bio from './components/Bio'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Homepage />
    <Banner />
    <Bio />
    <Skills />
    <Project />
    <Contact />
  </React.StrictMode>,
)
