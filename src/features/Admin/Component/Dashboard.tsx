import {guests, inventory} from "../../../Mock/MockData"
import { BedDouble, CalendarCheck, CalendarX2, Brush, User, CircleCheck, LogOut } from 'lucide-react';
import Banner from "../../../assets/banner.jpg";


function dashboard() {
    const userData = localStorage.getItem("auth");
  const parsedData = userData ? JSON.parse(userData) : null;

  const role = parsedData?.role;

    return(

        <>
        <div className="w-full overflow-hidden">
        <div className="relative mx-6 h-[177px] overflow-hidden">
                <img src={Banner} className="w-full h-full object-cover " />
                <div className="absolute inset-0 px-6 py-4 flex items-center justify-between">
                <div className="flex flex-col">              
                  <div className="flex items-center gap-3">
                    <p className="text-xl text-white">Admin Dashboard</p>
                    <div className="h-px w-10 bg-white"></div>
                  </div>
                  <h1 className="text-3xl mt-1 text-white">Welcome back, Admin!</h1>
                </div>
                <div className="text-right">
                  <p className="text-3xl text-white">{new Date().toLocaleTimeString()}</p>
                  <p className="uppercase text-white">{new Date().toDateString()}</p>
                </div>
              </div>
              </div>

       <div className="mx-6 bg-white mt-10 flex gap-6">
            <div className="flex flex-col gap-4 flex-1">
                <div className="flex flex-wrap gap-4">
            
            <div className="border flex-1 gap-2 h-[86px] flex justify-center text-center border-[#d4d4d4] text-black p-5 rounded-[15px]">
              <BedDouble size={20} color="#097b4a" strokeWidth={1.75} /> < span className=" ml-2">AVAILABLE</span>
            </div>
            <div className="border flex-1 gap-2 h-[86px] flex justify-center text-center border-[#d4d4d4] text-black p-5 rounded-[15px]">
                <CalendarCheck size={20} color="#11097b" strokeWidth={1.75} /> <span className=" ml-2">ARIVALS</span>
              
            </div>
            <div className="border flex-1 gap-2 h-[86px] flex justify-center text-center border-[#d4d4d4] text-black p-5 rounded-[15px]">
               <CalendarX2 color="#e1aa33" size={20} strokeWidth={2.25} /><span className="">DEPARTING</span>
            </div>            
            <div className="border flex-1 gap-2 h-[86px] flex justify-center text-center border-[#d4d4d4] text-black p-5 rounded-[15px]">
               <Brush size={20} color="#e713af" strokeWidth={2.25} /> <span>TURNOVER</span>
            </div>
            </div>

             
             <div className="border flex w-full flex-col border-[#cfcfcf] h-[350px] rounded-[15px]">
            <div className="flex items-center justify-between">
            <h2 className="ml-[27px] mt-[13px] ">
                Today's Arrivals
            </h2>
            <h2 className="text-right mt-[13px] mr-10">
                FULL MANIFEST
            </h2>
            
            </div>
             <div className="mt-10 ml-10" >

  {guests.map((guest) => (
    <div key={guest.id} className=" p-3 mb-2">
      <p>{guest.name}
         <span className={`text-[1rem] ml-140 rounded-xl pl-2 pr-2
            ${
            guest.menifest==="Arived" ? "bg-[#D2FFD0]" : "bg-[#D0E6FF]"
        }`}
         >{guest.menifest}
            </span> </p>
      <p className="text-[0.8rem]">Room {guest.roomNo} {guest.roomType} </p>
      
    </div>
  ))}
</div>
            </div>
        </div>

            <div className="w-[280px] flex flex-col gap-4 ">
            <div className="w-[253px] h-auto rounded-[15px] border border-[#d4d4d4] p-3">
                <h1 className="mt-2 ml-2 mb-2">QUICK ACTIONS</h1>
                <div className="flex items-center gap-2 mt-2 p-2 bg-[#061041] text-white rounded-[11px] cursor-pointer">
                    <User size={16} color="#DFC627" />
                    <span>NEW BOOKING</span>
                </div>
                <div className="flex items-center gap-2 mt-2 p-2 rounded-[11px] cursor-pointer hover:bg-gray-100">
                    <CircleCheck size={16} color="#DFC627" />
                    <span>INSTANT CHECK-IN</span>
                </div>
                <div className="flex items-center gap-2 mt-2 p-2 rounded-[11px] cursor-pointer hover:bg-gray-100">
                    <LogOut size={16} color="#DFC627" />
                    <span>INSTANT CHECK-OUT</span>
                </div>
            </div>
            <div className="border border-[#d4d4d4] rounded-xl p-4 w-[253px]">
      <h2 className="mb-3 text-sm font-medium">INVENTORY</h2>
      <div>
        {inventory.map((I) => (
            <div className="flex flex-col gap-2 "
             key={I.id}>
                <p className=" text-purple-500 rounded-sm pl-1 border border-[#C4C4C4]">
                  Total rooms <span className="ml-15">{I.totalRooms}</span></p>
                <p className="rounded-sm text-blue-400 pl-1 border border-[#C4C4C4]">
                  Occupied <span className="ml-20">{I.occupied}</span></p>
                <p className="rounded-sm pl-1 border border-[#C4C4C4]">
                  Cleaning <span className="ml-22">{I.cleaning}</span></p>

            </div>
        ))}
      </div>
        </div>
        </div>
        </div>
        </div>
        
       
        
        </>
    )
}
export default dashboard;