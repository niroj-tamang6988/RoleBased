import Dashboard from "../features/Staff/Components/Dashboard"
import Sidebar from "../Components/Sidebar"
import Header from "../Components/Header"
import { useLocation } from "react-router-dom"
import type { JSX } from "react"
import Profile from "../features/Staff/Components/Profile"
import Rooms from "../features/Staff/Components/Rooms"


    const contentMap: Record<string, JSX.Element> = {
    "/dashboard": <Dashboard />,
    "/dashboard/profile": <Profile/>,
    "/dashboard/rooms": <Rooms/>
    
}

function StaffDashboard (){
  const location = useLocation()
    const content = contentMap[location.pathname] ?? <Dashboard />
    
    return(

        <>
        <div className="overflow-hidden">
        <Header/>
        <div className="flex min-h-screen">
            <div>
            <Sidebar/>
            </div>
            <div className="flex-1">
                {content}
            </div>
        </div>
        </div>
        </>
    )
}

export default StaffDashboard