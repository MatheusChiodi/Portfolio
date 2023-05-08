import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './assets/styles/contact.css'
import Header from './templates/Header.jsx'
import ContainerAbout from './ContainerAbout'
import ContainerExperience from './ContainerExperience'
import ContainerPorfolio from './ContainerPorfolio'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <ContainerAbout />
    <ContainerPorfolio />  
    <ContainerExperience />
  </React.StrictMode>,
)
