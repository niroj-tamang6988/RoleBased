export const guests = [
    {
        id:1,
        name:"Niroj",
        phone:"9812345670",
        roomNo:100,
        roomType:"Deluxe",
        menifest:"Confirmed"
    },
    {
        id:2,
        name:"Sujan",
        phone:"9812345670",
        roomNo:101,
        roomType:"Single",
        menifest:"Arived",
    },
    {
        id:3,
        name:"Pujan",
        phone:"9812345680",
        roomNo:102,
        roomType:"Standard",
        menifest:"Stayed",
    }
]

export const rooms = [
  {
    id: 1,
    roomNo: 101,
    type: "Deluxe",
    price: 2000,
    status: "pending" as "pending" | "complete"
  },
  {
    id: 2,
    roomNo: 102,
    type: "Single",
    price: 1500,
    status: "complete" as "pending" | "complete"
  },
  {
    id:3,
    roomNo: 103,
    type: "Standard",
    price: 1000,
    status: "pending" as "pending" | "complete"
  }
];

export const inventory = [
    {
        id:1,
        totalRooms: 8,
        occupied:5,
        cleaning:2
        }
]