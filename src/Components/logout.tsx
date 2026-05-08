import {useNavigate} from "react-router-dom"

function Logout() {
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.clear();
        navigate("/login");
    }
     

    return(
        <>
            <button className="text-red-600 ml-10 mt-80 rounded-2xl cursor-pointer"
                onClick={logOut} >
                Logout
            </button>
        </>
        
    )

}

export default Logout