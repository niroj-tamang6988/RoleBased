import { inventory } from "../../../Mock/MockData";
import { BedDouble, CalendarCheck, CalendarX2, Brush, User, CircleCheck, LogOut } from 'lucide-react';
import Banner from "../../../assets/Banner.jpg";

function dashboard() {
    return(
      
        <>
        <div className="w-full overflow-hidden">
        <div className="relative mx-6 h-44.25 overflow-hidden">
                <img src={Banner} className="w-full h-full object-cover " />
                <div className="absolute inset-0 px-6 py-4 flex items-center justify-between">
                <div className="flex flex-col">              
                  <div className="flex items-center gap-3">
                    <p className="text-xl text-black">Staff Dashboard</p>
                    <div className="h-px w-10 bg-black"></div>
                  </div>
                  <h1 className="text-3xl mt-1 text-black">Welcome back, Staff!</h1>
                </div>
                <div className="text-right">
                  <p className="text-3xl text-black">{new Date().toLocaleTimeString()}</p>
                  <p className="uppercase text-black">{new Date().toDateString()}</p>
                </div>
              </div>
              </div>

        <div className="mx-6 bg-white mt-2 flex gap-6">
            <div className="flex flex-col gap-4 flex-1">
                <div className="flex flex-wrap gap-4">
            
            <div className="border flex-1 gap-2 .h-\[86px\ flex justify-center items-center border-[#d4d4d4] text-black p-5 rounded-[15px]">
             <div className="bg-[#D3FCC05C] p-2 rounded-xl ">
              <BedDouble size={20} color="#097b4a" strokeWidth={1.75} /> </div> 
              <span className="ml-2">AVAILABLE</span>
            </div>
            <div className="border flex-1 gap-2 h-21.5 flex justify-center items-center border-[#d4d4d4] text-black p-5 rounded-[15px]">
                <div className="bg-[#C0DDFD61] p-2 rounded-xl ">
                  <CalendarCheck size={20} color="#11097b" strokeWidth={1.75} /> </div>
                <span className="ml-2">ARIVALS</span>
            </div>
            <div className="border flex-1 gap-2 h-21.5 flex justify-center items-center border-[#d4d4d4] text-black p-5 rounded-[15px]">
               <div className="bg-[#F9D6B161] p-2 rounded-xl ">
                <CalendarX2 color="#e1aa33" size={20} strokeWidth={2.25} /></div>
               <span className="ml-2">DEPARTING</span>
            </div>            
            <div className="border flex-1 gap-2 h-21.5 flex justify-center items-center border-[#d4d4d4] text-black p-5 rounded-[15px]">
              <div className="bg-[#F9A8FF57] p-2 rounded-xl "> <Brush size={20} color="#e713af" strokeWidth={2.25} /></div>
               <span className="ml-2">TURNOVER</span>
            </div>
            </div>

             <div className="border flex w-full flex-col border-[#cfcfcf] h-87.5 rounded-[15px]">
            <div className="flex items-center justify-between">
            <h2 className="ml-6.75 mt-3.25 ">
                Today's Arrivals
            </h2>
            <h2 className="text-right mt-3.25 mr-10">
                FULL MANIFEST
            </h2>
            </div>
            </div>
        </div>

            <div className="w-63.25hrink-0 flex flex-col gap-4">
            <div className="w-63.25 h-auto rounded-[15px] border border-[#d4d4d4] p-3">
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

            <div className="border border-[#d4d4d4] rounded-xl p-4 w-63.25">
      <h2 className="mb-3 text-sm font-medium">INVENTORY</h2>
      
      <div>
              {inventory.map((I) => (
                  <div className="flex flex-col gap-2 "
                   key={I.id}>
                      <p className=" text-purple-500 rounded-sm pl-1 border border-[#C4C4C4]">
                        Total rooms <span className="ml-15">{I.totalRooms}</span></p>
                      <p className=" text-blue-500 rounded-sm pl-1 border border-[#C4C4C4]">
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