import { useState } from "react";
import Sidebar from "./components/Sidebar";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false); // state to open/close dropdown
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().split('T')[0]);


  const toggleDropdown = () => {
    setIsOpen(!isOpen); // toggle the state
  };

  const patients = [
    {
      pid: "CCC.10",
      name: "Mr. Manish Kumar",
      dob: "20-Sep-2002",
      gender: "Male",
      mobile: "+91 00000 00000",
      email: "manish@gmail.com",
      lastAppointment: "10-March-2025",
    },
    {
      pid: "CCC.9",
      name: "Mrs. Rohini Kumar Mishra",
      dob: "20-Sep-2002",
      gender: "Female",
      mobile: "+91 00000 00000",
      email: "-",
      lastAppointment: "-",
    },
    {
      pid: "CCC.8",
      name: "Dummy Name",
      dob: "20-Sep-2002",
      gender: "Male",
      mobile: "+91 00000 00000",
      email: "-",
      lastAppointment: "10-March-2025",
    },
    {
      pid: "CCC.7",
      name: "Mrs. Rohini Kumar Mishra",
      dob: "20-Sep-2002",
      gender: "Female",
      mobile: "+91 00000 00000",
      email: "-",
      lastAppointment: "-",
    },
    {
      pid: "CCC.6",
      name: "Dummy Name",
      dob: "20-Sep-2002",
      gender: "Male",
      mobile: "+91 00000 00000",
      email: "-",
      lastAppointment: "10-March-2025",
    },
    {
      pid: "CCC.5",
      name: "Mrs. Rohini Kumar Mishra",
      dob: "20-Sep-2002",
      gender: "Female",
      mobile: "+91 00000 00000",
      email: "-",
      lastAppointment: "-",
    },
    {
      pid: "CCC.4",
      name: "Dummy Name",
      dob: "20-Sep-2002",
      gender: "Male",
      mobile: "+91 00000 00000",
      email: "-",
      lastAppointment: "10-March-2025",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b">
          <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 py-4 space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <img
                src="https://i.ibb.co/Xr0zFWXQ/Icon.png"
                alt=""
                className="w-5 h-5"
              />
              <div className="relative inline-block text-left">
                <button
                  className="inline-flex justify-center w-full text-gray-600 text-sm sm:text-base"
                  onClick={toggleDropdown} // onClick toggle
                >
                  Curevention Clinic Center
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isOpen && ( // Show dropdown only when isOpen = true
                  <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Option 1
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Option 2
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Option 3
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="https://i.ibb.co/fVkHQ0SH/Notifications.png"
                alt=""
                className="w-5 h-5"
              />
              <div className="flex items-center space-x-2">
                <img
                  src="https://i.ibb.co/PvWRJZSr/Ellipse-20-1.jpg"
                  alt="Doctor"
                  className="w-8 h-8 rounded-full"
                />
                <div className="hidden sm:block">
                  <div className="text-sm font-medium">Dr. Suchita Gupta</div>
                  <div className="text-xs text-gray-500">General Physician</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main */}
        <main className="p-4 sm:p-6 flex-1 overflow-y-auto">
          {/* Search and Actions */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-4 space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-4 pr-10 py-2 border rounded-md w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <img
                  src="https://i.ibb.co/v4MBwvnf/search.png"
                  alt=""
                  className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
              </div>

              <button className="flex items-center space-x-2 px-4 py-2 border rounded-md w-full sm:w-auto">
                <span>Filter</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center space-x-2">
                <button className="p-1 rounded-md hover:bg-gray-100">
                  <img src="https://i.ibb.co/vxHfz4gH/Button-1.png" alt="" />
                </button>

                {/* Input Date */}
                <input
                  type="date"
                  value={currentDate} // Pass current date state
                  onChange={(e) => setCurrentDate(e.target.value)} // Update date
                  className="border rounded-md px-2 py-1"
                />
              </div>

              <select className="border rounded-md px-3 py-2">
                <option>Today</option>
              </select>

              <img src="https://i.ibb.co/KcpRP6nD/Button.png" alt="" />

              <button className="border border-blue-40 text-black px-4 py-2 rounded-md flex items-center space-x-2 w-full sm:w-auto">
                <img
                  src="https://i.ibb.co/svqjVrdw/Icon-11.png"
                  alt=""
                  className="w-4 h-4"
                />
                <span>Add New Patient</span>
              </button>
            </div>
          </div>

          {/* Patients Table */}
          <div className="bg-white rounded-lg shadow overflow-x-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center px-4 sm:px-6 py-4 space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="flex space-x-2 items-center">
                <span className="font-medium">Patient&apos;s</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">
                  {patients.length}
                </span>
              </div>
              <div className="flex space-x-2 items-center">
                <span className="text-gray-500">Draft</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded">
                  6
                </span>
              </div>
            </div>

            <table className="min-w-full text-sm">
              <thead className="bg-gray-100">
                <tr className="text-left">
                  <th className="px-4 sm:px-6 py-2">PID ⇅</th>
                  <th className="px-4 sm:px-6 py-2">Name ⇅</th>
                  <th className="px-4 sm:px-6 py-2 whitespace-nowrap">
                    Date of Birth ⇅
                  </th>
                  <th className="px-4 sm:px-6 py-2 whitespace-nowrap">
                    Gender ⇅
                  </th>
                  <th className="px-4 sm:px-6 py-2">Mobile ⇅</th>
                  <th className="px-4 sm:px-6 py-2">Email ⇅</th>
                  <th className="px-4 sm:px-6 py-2 whitespace-nowrap">
                    Last Appointment ⇅
                  </th>
                  <th className="px-4 sm:px-6 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient, index) => (
                  <tr
                    key={patient.pid}
                    className={`hover:bg-gray-50 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="px-4 sm:px-6 py-2">{patient.pid}</td>
                    <td className="px-4 sm:px-6 py-2 whitespace-nowrap">
                      {patient.name}
                    </td>
                    <td className="px-4 sm:px-6 py-2 whitespace-nowrap">
                      {patient.dob}
                    </td>
                    <td className="px-4 sm:px-6 py-2">{patient.gender}</td>
                    <td className="px-4 sm:px-6 py-2 whitespace-nowrap">
                      {patient.mobile}
                    </td>
                    <td className="px-4 sm:px-6 py-2">{patient.email}</td>
                    <td className="px-4 sm:px-6 py-2">
                      {patient.lastAppointment}
                    </td>
                    <td className="px-4 sm:px-6 py-2">
                      <button className="text-gray-400 hover:text-gray-600">
                        ...
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
