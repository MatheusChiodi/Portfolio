import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './templates/Header.jsx'
import ContainerOne from './pages/containerOne.jsx'
import ContainerTwo from './pages/ContainerTwo.jsx'
import ContainerThree from './pages/ContainerThree'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <ContainerOne />
    <ContainerTwo />
    <ContainerThree />
  </React.StrictMode>,
)
