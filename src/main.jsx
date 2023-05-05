import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './templates/Header.jsx'
import ContainerOne from './ContainerOne'
import ContainerTwo from './ContainerTwo'
import ContainerThree from './containerThree'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <ContainerOne />
    <ContainerTwo />
    <ContainerThree />
  </React.StrictMode>,
)
