import {rooms as initialRooms} from "../../../Mock/MockData"
import {useState} from "react"
import { CheckCircle, Clock, Search } from "lucide-react"


type Room = {
  id: number;
  roomNo: number;
  status: "pending" | "complete";
};

function Dashboard () {
   const [roomList, setRoomList] = useState<Room[]>(initialRooms);

   function handleStatus(id: number) {
    setRoomList((prev) =>
      prev.map((room) =>
        room.id === id ? { ...room, status: "complete" } : room
      )
    );
  }


    return(
        <>
          <div className="mt-5 w-full">
            <div className=" pl-10 flex  gap-6">
              <div className="border w-120 border-[#d4d4d4] rounded-xl p-5 flex items-center justify-between">
                <div className="bg-[#85e6a9] p-1.5 rounded-xl "><CheckCircle size={28} color="#075c26" strokeWidth={1.5} /></div>
                <div className="text-right">
                  <p className="text-sm">ROOMS COMPLETED</p>
                  <p>0</p>
                </div>
              </div>
              <div className="w-120 border border-[#d4d4d4] rounded-xl p-5 flex items-center justify-between">
               <div className="bg-[#f3b68b] p-1.5 rounded-xl "> <Clock size={28} color="#c0560b"  strokeWidth={1.5} /> </div>
                <div className="text-right">
                  <p className="text-sm">ROOMS PENDING</p>
                  <p>0</p>
                </div>
              </div>
            </div>

           <div className="w-246.25 h-15 flex items-center justify-left ml-10 mt-5 rounded-sm border border-[#d4d4d4]">
          <div className="flex items-center border border-gray-300 rounded ml-4 px-3 py-2">
            <Search size={18} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search by Room No..."
              className="outline-none w-75"
            />
          </div>
        </div>
          <div className="m-10 mr-30 border border-gray-300 rounded-sm">
          <div className="border border-gray-300 h-8 grid grid-cols-3 w-full  ">
            <p className ="text-left ml-2 font-semibold ">ROOM NO</p>
            <p className="text-center font-semibold pr-40">STATUS</p>
            <p className="text-right font-semibold pr-55">ACTION</p>
          </div>

          <div className="space-y-3 mt-2 pr-50 ml-2">
           {roomList.map((room) => (
            <div key={room.id}
              className=" grid grid-cols-3 font-semibold w-full"
            >
              <p>{room.roomNo}</p>
              <p
        className={`text-center ml-29 w-20 rounded-xl ${
          room.status === "pending"
            ? "bg-orange-500"
            : "bg-green-500"
        }`}
      >{room.status}</p>

       <p className="text-right pr-2">
        <button
        onClick={() => handleStatus(room.id)}
        className="px-3 py-1 bg-blue-500 text-white rounded-xl">
          Toggle
        </button>
      </p>
              
            </div>
          ))}
          </div>
          </div>
      


          </div>
        </>
    )
}

export default Dashboard