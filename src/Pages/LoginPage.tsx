import {useState} from "react"
import {useNavigate} from "react-router-dom"
import { useAuth } from "../Context/authContext"
import { Login as loginApi } from "../Services/authServices"


function LoginPage () {
  const [phone_number, setPhone_number] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState("");
  
  const {login} = useAuth();
  const navigate = useNavigate();

    function validatePhone(phone_number: string) {
    const regex = /^(97|98)\d{8}$/;
    return regex.test(phone_number);
  }



  async function handleSubmit(e:React.FormEvent){
    e.preventDefault();
    setError("");

    if(!validatePhone(phone_number)){
      setError("Phone number must be 10 digit ");
      return;
    }

    try {
      const data = await loginApi(phone_number, password);
      login({
        user_id: data.user_id,
        name:data.name,
        role:data.role,
        access:data.access,
        refresh:data.refresh,
      });
      navigate("/dashboard")
    } catch (err : any ) 
        { setError(err.message || "Login failed");
        }
  }

    return(
        <>
                 <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-gray-900 mb-1">Sign in</h2>
        <p className="text-sm text-gray-500 mb-8">Welcome back</p>

        <form onSubmit={handleSubmit}  className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Phone no.</label>
            <input
              type="text" 
              onChange={(e) => setPhone_number(e.target.value)}
              placeholder="Enter phone number"
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm outline-none focus:border-gray-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm outline-none focus:border-gray-500"
            />
          </div>
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
          <button type="submit" className="w-full py-2 bg-gray-900 text-white text-sm rounded hover:bg-gray-700 transition">
            Log In
          </button>
        </form>

        
      </div>
    </div>
        </>

    )
}
export default LoginPage