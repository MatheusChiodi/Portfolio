import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './assets/styles/contact.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Projects from './routes/Projects.jsx';
import Header from './templates/Header';
import Footer from './templates/Footer';

const router = createBrowserRouter([
  { path: '/Portfolio/', element: <Home /> },
  { path: '/Portfolio/projets/', element: <Projects /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
)

