
import Sidebar from "../features/Admin/Component/Sidebar"
import Header from "../features/Admin/Component/Header"
import Logout from "../Components/logout"

function AdminDashboard() {

    return(
        <>
        <div className="flex">
            <Sidebar/>
            <Header/>
            <Logout/>
            </div>
        </>
    )
}
export default AdminDashboard
