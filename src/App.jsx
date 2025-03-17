import { useState } from "react";
import Sidebar from "./components/Sidebar";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentDate] = useState("March 10, 2025");

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
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1">
        <header className="bg-white border-b">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-2">
              <img
                src="https://i.ibb.co/Xr0zFWXQ/Icon.png"
                alt=""
                className="w-5 h-5"
              />
              <span className="text-gray-600">Curevention Clinic Center</span>
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
                <div>
                  <div className="text-sm font-medium">Dr. Suchita Gupta</div>
                  <div className="text-xs text-gray-500">General Physician</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-4 pr-10 py-2 border rounded-md w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <img
                  src="https://i.ibb.co/v4MBwvnf/search.png"
                  alt=""
                  className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
              </div>

              <button className="flex items-center space-x-2 px-4 py-2 border rounded-md">
                <span>Filter</span>
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button className="p-1 rounded-md hover:bg-gray-100">
                  <img src="https://i.ibb.co/vxHfz4gH/Button-1.png" alt="" />
                </button>
                <span className="text-sm font-medium">{currentDate}</span>
              </div>
              <select className="border rounded-md px-3 py-2">
                <option>Today</option>
              </select>
              <img src="https://i.ibb.co/KcpRP6nD/Button.png" alt=""/>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center space-x-2">
                <span className="text-lg"><img src="https://i.ibb.co/svqjVrdw/Icon-11.png" alt="" /></span>
                <span>Add New Patient</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow">
            <div className="flex items-center px-6 py-2 ">
              <div className="flex space-x-2 items-center">
                <span className="font-medium">Patient&apos;s</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">
                  8
                </span>
              </div>
              <div className="ml-4 flex space-x-2 items-center">
                <span className="text-gray-500">Draft</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded">
                  6
                </span>
              </div>
            </div>

            <table className="w-full">
              <thead>
                <tr className="text-left text-sm">
                  <th className="px-6 py-2">PID ⇅</th>
                  <th className="px-6 py-2">Name ⇅</th>
                  <th className="px-6 py-2 whitespace-nowrap">
                    Date of Birth ⇅
                  </th>
                  <th className="px-6 py-2 whitespace-nowrap">Gender ⇅</th>
                  <th className="px-6 py-2">Mobile ⇅</th>
                  <th className="px-6 py-2">Email ⇅</th>
                  <th className="px-6 py-2 whitespace-nowrap">
                    Last Appointment ⇅
                  </th>
                  <th className="px-6 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient, index) => (
                  <tr 
                    key={patient.pid} 
                    className={` hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-500'}`}
                  >
                    <td className="px-6 py-2">{patient.pid}</td>
                    <td className="px-6 py-2 whitespace-nowrap">
                      {patient.name}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap">
                      {patient.dob}
                    </td>
                    <td className="px-6 py-2">{patient.gender}</td>
                    <td className="px-6 py-2 whitespace-nowrap">
                      {patient.mobile}
                    </td>
                    <td className="px-6 py-2">{patient.email}</td>
                    <td className="px-6 py-2">{patient.lastAppointment}</td>
                    <td className="px-6 py-2">
                      <button className="text-gray-400 hover:text-gray-600"></button>
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
