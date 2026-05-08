import Dashboard from "../features/Staff/Components/Header"
import Sidebar from "../features/Staff/Components/Sidebar"

function StaffDashboard (){
    return(

        <>
        <div className="flex">
            <Sidebar />
            <Dashboard />
            
        </div>
        </>
    )
}

export default StaffDashboard