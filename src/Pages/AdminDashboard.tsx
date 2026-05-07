import Dashboard from "../features/Admin/Component/Dashboard"
import Sidebar from "../features/Admin/Component/Sidebar"

function AdminDashboard() {

    return(
        <>
        <div className="flex">
            <Sidebar/>
            <Dashboard/>
            </div>
        </>
    )
}
export default AdminDashboard
