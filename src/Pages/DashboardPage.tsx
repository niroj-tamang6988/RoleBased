import StaffDashboard from "./StaffDashboard"
import UserDashboard from "./HousekeeperPage"
import AdminDashboard from "./AdminDashboard"
import { useAuth } from "../Context/AuthContext"

function DashboardPage() {
    const { user } = useAuth()
    const role = user?.role || localStorage.getItem("auth") 
    && JSON.parse(localStorage.getItem("auth")!).role

    return(
        <>
          {role === "Admin" && <AdminDashboard/>}
          {role === "Staff" && <StaffDashboard/>}
          {role === "Housekeeper" && <UserDashboard/>}
        </>
    )
}
export default DashboardPage