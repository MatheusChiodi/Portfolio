import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './assets/styles/contact.css'
import Header from './templates/Header.jsx'
import Footer from './templates/Footer'
import Home from './pages/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Header />
        <Home />
        <Footer />
    </React.StrictMode>,
)

