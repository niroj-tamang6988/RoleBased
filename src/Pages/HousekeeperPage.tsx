import Dashboard from "../features/User/components/Dashboard"
import Sidebar from "../Components/Sidebar"
import Header from "../Components/Header"
import Profile from "../features/User/components/Profile"
import type { JSX } from "react"
import { useLocation } from "react-router-dom"


const contentMap: Record<string, JSX.Element> = {
    "/dashboard": <Dashboard />,
    "/dashboard/profile": <Profile/>,
    
}
function HousekeeperPage (){
  const location = useLocation()
    const content = contentMap[location.pathname] ?? <Dashboard />
    

    return(

        <>
         
        <Header/>
        <div className="flex min-h-screen">
            <div>
            <Sidebar/>
            </div>
            <div className="flex-1">
                {content}
            </div>
        </div>
        </>
    )
}

export default HousekeeperPage