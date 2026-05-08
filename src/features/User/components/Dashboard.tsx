function Dashboard () {
   


    return(
        <>
             <header className="bg-blue-200 mt-3 w-full h-25 px-6 py-4 flex items-center justify-between">
                <div className="flex flex-col">              
                  <div className="flex items-center gap-3">
                    <p className="text-xl ">User Dashboard</p>
                    <div className="h-px w-10 bg-black"></div>
                  </div>
                  <h1 className="text-3xl mt-1">
                    Welcome back, User
                  </h1>
                </div>
                <div className="text-right">
                  <p className="text-3xl">{new Date().toLocaleTimeString()}</p>
                  <p className="uppercase">{new Date().toDateString()}</p>
                </div>

              </header>
        </>
    )
}

export default Dashboard