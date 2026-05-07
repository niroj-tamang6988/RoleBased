

function LoginPage () {

    return(
        <>
                 <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-gray-900 mb-1">Sign in</h2>
        <p className="text-sm text-gray-500 mb-8">Welcome back</p>

        <form  className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Phone no.</label>
            <input
              type="text" 
              placeholder="Enter phone number"
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm outline-none focus:border-gray-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded text-sm outline-none focus:border-gray-500"
            />
          </div>
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