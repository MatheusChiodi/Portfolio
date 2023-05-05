import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './templates/Header.jsx'
import ContainerAbout from './ContainerAbout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <ContainerAbout />
  </React.StrictMode>,
)
