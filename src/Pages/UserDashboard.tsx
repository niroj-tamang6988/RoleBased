import Logout from "../Components/logout"
import Dashboard from "../features/User/components/Dashboard"
import Sidebar from "../features/User/components/Sidebar"

function UserDashboard (){
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

export default UserDashboard