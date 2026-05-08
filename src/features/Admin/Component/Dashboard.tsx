

function dashboard() {

    return(

        <>
        <div className="min-h-screen bg-white flex items-center justify-center gap-6">

            {/* Available */}
            <div className="w-1/3 bg-white text-black p-10 rounded shadow-xl/15">
                Available
            </div>

            {/* Occupied */}
            <div className="w-1/3 bg-white text-black p-10 rounded shadow-xl/15">
                Occupied
            </div>

            {/* Check-INS */}
            <div className="w-1/3 bg-white text-black p-10 rounded shadow-xl/15">
                Check-INS
            </div>
            
            {/* Revenue */}
            <div className="w-1/3 bg-white text-black p-10 rounded shadow-xl/15">
                Revenue
            </div>

        </div>
        </>
    )
}
export default dashboard;