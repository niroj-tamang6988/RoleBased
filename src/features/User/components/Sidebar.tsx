import Logout from "../../../Components/logout";
import {UserSidebar } from "../../../Config/data";
import { useNavigate, useLocation} from "react-router-dom";


const SideBarRoutes: Record <string , string> ={
    "Dashboard" : "/",
    "Profile" : "/Profile",
}

function Sidebar() {
    const navigate = useNavigate()
    const location = useLocation()


    return(
        <>
            <div className="min-h-150 w-50 bg-[#1c0658]">

                <h1 className="text-center pt-5 text-white"> 
                 User Sidebar</h1>
            <div> 
                {UserSidebar.map((nav) => (
                    <button
                    key={nav}
                    onClick={() => navigate(SideBarRoutes[nav] ?? "/")}
                    className={`grid pl-10 py-5  rounded-md text-l font-medium hover:text-yellow-400                  
                        ${location.pathname === SideBarRoutes[nav] ?"text-yellow-400" : "text-white"}`}>
                        {nav}

                    </button>
                ))} 
            </div>
            <Logout/>
            </div>
        </>
    )
}
export default Sidebar