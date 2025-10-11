import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import MainLayout from "./layouts/MainLayout"
import React from "react"
import { LandingPage } from "./pages/Landing/LandingPage"
import InDevelopmentPage from "./pages/InDevelopment/InDevelopmentPage"
import CareersPage from "./pages/Careers/CareersPage"
import AboutPage from "./pages/About/AboutPage"
import SecurityPage from "./pages/Security/SecurityPage"
import LoginPage from "./pages/Login/LoginPage"
import SignUpPage from "./pages/SignUp/SignUpPage"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/careers" element={<CareersPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/security" element={<SecurityPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path='*' element={<InDevelopmentPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
