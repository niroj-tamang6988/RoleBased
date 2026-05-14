import Group from "../assets/Group.png"
import IconBell from "../assets/IconBell.png"

function Header () {
    
    return(

        <>
        <div className="flex items-center border border-[#CCCBCB] justify-between w-full">

  
  <div className="flex items-center gap-3">

    <img
      className="w-[62px] h-[51px] object-cover mt-3.5 mb-3.5 ml-6.25"
      src={Group}
      alt="Logo"
    />

    <div className="flex flex-col leading-none">
      <h1 className=" font-bold">
        NAMASTE
      </h1>
      <h1 className="ml-3.5 text-[#ff7b00] ">
        PMS
      </h1>
    </div>
  </div>

  <div className="flex items-center gap-5 pr-10">
    <button className="text-white bg-[#061041] rounded-xl px-5 py-2">
      + Add Order
    </button>
    <img src={IconBell} 
      alt="Notification Bell"/>

  </div>

</div>
           
        </>
    )
}

export default Header