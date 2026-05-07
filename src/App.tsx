import './App.css'

import {BrowserRouter, Routes, Route} from "react-router-dom"
import AdminDashboard from "./Pages/AdminDashboard"
import LoginPage from "./Pages/LoginPage"




function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/Login" element={<LoginPage/>} />   

      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
