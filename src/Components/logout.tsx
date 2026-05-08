import {useNavigate} from "react-router-dom"

function Logout() {
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");

        navigate("/login");
    }
     

    return(
        <>
            <button onClick={logOut} >
                Logout
            </button>
        </>
        
    )

}

export default Logout