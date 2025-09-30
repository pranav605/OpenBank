import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import MainLayout from "./layouts/MainLayout"
import React from "react"
import { LandingPage } from "./pages/Landing/LandingPage"
import InDevelopmentPage from "./pages/InDevelopment/InDevelopmentPage"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path='*' element={<InDevelopmentPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
