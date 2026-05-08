import './App.css'
import { Navigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdminDashboard from "./Pages/AdminDashboard"
import LoginPage from "./Pages/LoginPage"
import { AuthProvider } from "./Context/authContext"
import StaffDashboard from "./Pages/StaffDashboard"
import UserDashboard from "./Pages/UserDashboard"

function App() {

  const userData = localStorage.getItem("auth");
  const parsedData = userData ? JSON.parse(userData) : null;
  const role = parsedData?.role;

  let Dashboard;

  if (role === "Admin") {
    Dashboard = AdminDashboard;
  } else if (role === "Staff") {
    Dashboard = StaffDashboard;
  } else if (role === "Housekeeper") {
    Dashboard = UserDashboard;
  }

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>

           <Route
              path="/dashboard"
              element={
              Dashboard ? <Dashboard /> : <Navigate to="/login" />
  }
/>

            <Route path="/login" element={<LoginPage />} />

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App