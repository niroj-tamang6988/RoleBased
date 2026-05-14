import {useNavigate} from "react-router-dom"

function Logout() {
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.clear();
        navigate("/login");
    }
     

    return(
        <>
            <button className="text-white pl-10 py-5 rounded-md font-medium hover:text-yellow-400 cursor-pointer"
                onClick={logOut} >
                Logout
            </button>
        </>
        
    )

}

export default Logout