import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './assets/styles/contact.css'
import Header from './templates/Header.jsx'
import ContainerAbout from './ContainerAbout'
import ContainerExperience from './ContainerExperience'
import Footer from './templates/Footer'
import ContainerPortfolio from './ContainerPortfolio'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Header />
        <ContainerAbout />
        <ContainerPortfolio />
        <ContainerExperience />
        <Footer />
    </React.StrictMode>,
)
