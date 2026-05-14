import { useNavigate, useLocation} from "react-router-dom";
import { SidebarData } from "../Config/data";
import Logout from "./Logout"
import { Building2 } from "lucide-react"

const SideBarRoutes: Record <string , string> ={
    "Dashboard" : "/dashboard",
    "Rooms" : "/dashboard/rooms",
    "Menu" : "/dashboard/menu",
    "Staff" : "/dashboard/staff",
    "Profile" : "/dashboard/profile",
}

function Sidebar() {

    const navigate = useNavigate()
    const location = useLocation()

    const userData = localStorage.getItem("auth");
    const parsedData = userData ? JSON.parse(userData) : null;
    const role = parsedData?.role;

    let allowSidebar: typeof SidebarData = [];

    if (role === "Admin") {
        allowSidebar = SidebarData;
    } else if (role === "Staff") {
        allowSidebar = SidebarData.filter(n => ["Dashboard", "Rooms", "Profile"].includes(n.label));
    } else {
        allowSidebar = SidebarData.filter(n => ["Dashboard", "Profile"].includes(n.label));
    }                                                                      

    return(
        <>
            
        <div className="h-screen w-[200px] bg-[#061041] sticky top-0 pt-4">

                <div className="border border-gray-600 mt-4 mx-3 rounded p-2 flex items-center gap-2">
                    <Building2 size={28} color="#CAC49C" strokeWidth={1.5} />
                    <div>
                        <p className="text-gray-400 text-xs">Company</p>
                        <p className="text-white text-sm font-semibold">Niroj</p>
                    </div>
                </div>

            <div> 
                {allowSidebar.map((nav) => (
                    <button
                        key={nav.label}
                        onClick={() => navigate(SideBarRoutes[nav.label])}
                        className={`flex items-center gap-3 pl-6 py-4 w-full rounded-md font-medium hover:text-yellow-400
                            ${location.pathname === SideBarRoutes[nav.label] ? "text-yellow-400" : "text-white"}
                        `}>
                        <nav.icon size={18} />
                        <span>{nav.label}</span>
                    </button>
                ))}
 
               < Logout/>
            </div>
            

            </div>
        </>
    ) 

}
export default Sidebar