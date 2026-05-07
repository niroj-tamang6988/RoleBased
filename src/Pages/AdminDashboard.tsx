import Dashboard from "../features/Admin/Component/Dashboard"
import Sidebar from "../features/Admin/Component/Sidebar"
import Header from "../features/Admin/Component/Header"

function AdminDashboard() {

    return(
        <>
        <div className="flex">
            <Sidebar/>
            <Header/>
            <Dashboard/>
            </div>
        </>
    )
}
export default AdminDashboard
