import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, Routes, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Service from './Pages/Service.jsx'
import Login from './Pages/Login/Login.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="service" element={<Service/>}/>
      <Route path="login" element={<Login/>}/>
      

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
