
function Sidebar() {
  return (
    <div className="w-20 bg-white border-r flex flex-col items-center py-6">
      <div className="mb-8">
        <p>
          <img src="https://i.ibb.co/jZhbmJHR/Vector.png" alt="" />
        </p>
      </div>

      <nav className="flex-1 space-y-8">
        <button className="w-full flex flex-col items-center text-gray-400 hover:text-gray-600">
          <img src="https://i.ibb.co/7JrCc9CT/Icon-4.png" alt="w-6 h-6" />
          <span className="text-xs mt-1">Dashboard</span>
        </button>

        <button className="w-full flex flex-col items-center text-gray-400 hover:text-gray-600">
          <img
            src="https://i.ibb.co/XfPxymvt/Icon-5.png"
            alt=""
            className="w-5 h-5"
          />
          <span className="text-xs mt-1">Patient</span>
        </button>

        <button className="w-full flex flex-col items-center text-gray-400 hover:text-gray-600">
          <img src="https://i.ibb.co/yF87Cb9S/Vector-1.png" alt="" className="w-5 h-5"/>
          <span className="text-xs mt-1">Appointment</span>
        </button>

        <button className="w-full flex flex-col items-center text-gray-400 hover:text-gray-600">
          <img src="https://i.ibb.co/sd8ZrBQK/Icon-6.png" alt="" className="w-5 h-5"/>
          <span className="text-xs mt-1">Billing</span>
        </button>

        <button className="w-full flex flex-col items-center text-gray-400 hover:text-gray-600">
          <img src="https://i.ibb.co/gZ6CjX5P/000000ff.png" alt="" className="w-5 h-5"/>
          <span className="text-xs mt-1">Doctor</span>
        </button>

        <button className="w-full flex flex-col items-center text-gray-400 hover:text-gray-600">
          <img src="https://i.ibb.co/N6Lnwh37/Icon-8.png" alt="" className="w-5 h-5"/>
          <span className="text-xs mt-1">Setting</span>
        </button>
      </nav>

      <button className="mt-auto flex flex-col items-center text-gray-400 hover:text-gray-600">
        <img src="https://i.ibb.co/LzvmxkVM/Icon-9.png" alt="" className="w-5 h-5"/>
        <span className="text-xs mt-1">Log Out</span>
      </button>
    </div>
  );
}

export default Sidebar;
