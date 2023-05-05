import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './templates/Header.jsx'
import ContainerAbout from './ContainerAbout'
import ContainerExperience from './ContainerExperience'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <ContainerAbout />
    <ContainerExperience />
  </React.StrictMode>,
)
