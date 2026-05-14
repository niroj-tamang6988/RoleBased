import DashboardPage from "./Pages/DashboardPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage"


function App() {

 

  return (
    <>
        <BrowserRouter>
          <Routes>
           <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard/*" element={<DashboardPage />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App