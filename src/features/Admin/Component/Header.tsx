function Header () {
   


    return(

        <>

             <header className="bg-blue-200 mt-3 w-full h-30 px-6 flex items-center justify-between">

    <p className="font-[Poppins] mb-20">
        ADMIN PANEL
    </p>
        
    <h1 className="font-[Poppins] pr-160 mt-15 text-2xl">
        Welcome back, Admin
    </h1>
  
    <div className="text-right font-[Poppins]">
        <p className="text-3xl">{new Date().toLocaleTimeString()}</p>
        <p className="uppercase">{new Date().toDateString()}</p>
    </div>

</header>
        </>
    )
}

export default Header