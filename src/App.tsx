import './App.css'

import {BrowserRouter, Routes, Route} from "react-router-dom"
import AdminDashboard from "./Pages/AdminDashboard"
import LoginPage from "./Pages/LoginPage"
import { AuthProvider } from "./Context/authContext"




function App() {
  

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/Login" element={<LoginPage/>} />   

      </Routes>

    </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
