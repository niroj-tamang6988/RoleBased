import Logout from "../Components/logout"
import Dashboard from "../features/Staff/Components/Dashboard"
import Sidebar from "../features/Staff/Components/Sidebar"

function StaffDashboard (){
    return(

        <>
        <div className="flex">
            <Dashboard />
            <Sidebar />
            <Logout />
        </div>
        </>
    )
}

export default StaffDashboard