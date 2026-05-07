import { useEffect, useState } from "react";
import { Bell, Mail, Search, CheckCheck } from "lucide-react";
import User from "../assets/user-avatar.png";
import User2 from "../assets/avatar.png";
import Profil from "./Profil";
  import {View, Eye} from "lucide-react";

function Navbar() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [openProfil, setOpenProfil] = useState(false);
  const [openNoti,setOpenNoti] =useState(false)
  const [openMsg,setOpenMsg] =useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[70px] bg-gray-100 flex items-center rounded-lg px-2 mt-2">
      <div className="flex items-center gap-5">
        <div className="bg-white w-[120px] px-5 py-1 rounded-lg font-bold text-[17px]  rounded-box shadow">
          <h1 className="border border-gray-300 rounded-lg p-1">{time}</h1>
        </div>

        <div className="bg-white outline-0 px-4 py-1 rounded-lg flex items-center rounded-box shadow">
          <Search />
          <input
            type="search"
            className="bg-white outline-0 px-4 rounded-lg"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="ml-auto flex items-center gap-4">
        <div className="bg-white p-1.5 rounded-full font-bold text-[18px]  relative rounded-box z-3">
          <Mail onClick={()=>setOpenMsg(!openMsg)} className="hover:text-blue-500 cursor-pointer" />
          <p className="bg-blue-500 px-2 rounded-full text-[14px] text-white absolute -top-2.5 left-[22px]">
                  2
                </p>
            {openMsg && (
            <div className="w-[250px] h-[40vh]  bg-white shadow-lg rounded-lg overflow-hidden flex items-center justify-between p-2 flex-col  absolute top-15 -right-2 border border-gray-300">
            <div className="border-b-1 w-full text-sm border-gray-400 pb-2">
              <div className="flex justify-between items-center relative">
                <h2>Messages</h2>
                
                
              </div>
            </div>
            <div className="flex flex-col gap-1">
              
              <div className="flex items-center justify-between w-full hover:bg-gray-200 bg-green-100 rounded-lg px-1">
                <div className="bg-white rounded-full w-9 h-9 font-bold text-[16px] flex items-center justify-center  rounded-box">
                  <img src={User2} alt="User" className=" rounded-full" />
                </div>
                <div className=" opacity-100  z-8">
                  <div className="ml-2 text-sm">
                    <h4 className="text-[10px] font-bold">Ange Marie</h4>
                    <p className="text-[8px] text-gray-400">
                      Lorem, ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </div>
                <div className="text-[9px] w-[50px] flex flex-col items-end">
                  <p className="text-gray-600">12:22 min</p>
                  <p className="text-[12px] cursor-pointer"><Eye size={16} /></p>
                </div>
              </div>
              <div className="flex items-center justify-between w-full hover:bg-gray-200 bg-green-100 rounded-lg px-1">
                <div className="bg-white rounded-full w-9 h-9 font-bold text-[16px] flex items-center justify-center  rounded-box">
                  <img src={User} alt="User" className=" rounded-full" />
                </div>
                <div className=" opacity-100  z-8">
                  <div className="ml-2 text-sm">
                    <h4 className="text-[10px] font-bold">Matenga Graace</h4>
                    <p className="text-[8px] text-gray-400">
                      Lorem, ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </div>
                <div className="text-[9px] w-[50px] flex flex-col items-end">
                  <p className="text-gray-600">10:12 min</p>
                  <p className="text-[12px] cursor-pointer"><Eye size={16} /></p>
                </div>
              </div>
              <div className="flex items-center justify-between w-full hover:bg-gray-200 rounded-lg px-1">
                <div className="bg-white rounded-full w-9 h-9 font-bold text-[16px] flex items-center justify-center  rounded-box">
                  <img src={User2} alt="User" className=" rounded-full" />
                </div>
                <div className=" opacity-100  z-8">
                  <div className="ml-2 text-sm">
                    <h4 className="text-[10px] font-bold">Marie Ange</h4>
                    <p className="text-[8px] text-gray-400">
                      Lorem, ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </div>
                <div className="text-[9px] w-[50px] flex flex-col items-end">
                  <p className="text-gray-600">11:10 min</p>
                  <p className="text-[12px] cursor-pointer text-blue-500"><Eye size={16} /></p>
                </div>
              </div>
              <div className="flex items-center justify-between w-full hover:bg-gray-200 rounded-lg px-1">
                <div className="bg-white rounded-full w-9 h-9 font-bold text-[16px] flex items-center justify-center  rounded-box">
                  <img src={User} alt="User" className=" rounded-full" />
                </div>
                <div className=" opacity-100  z-8">
                  <div className="ml-2 text-sm">
                    <h4 className="text-[10px] font-bold">Matenga Graace</h4>
                    <p className="text-[8px] text-gray-400">
                      Lorem, ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </div>
                <div className="text-[9px] w-[50px] flex flex-col items-end">
                  <p className="text-gray-600">12:22 min</p>
                  <p className="text-[12px] cursor-pointer text-blue-500"><Eye size={16} /></p>
                </div>
              </div>
            </div>
            <div className="text-[13px] font-semibold text-gray-700 border-t-1 border-gray-400 w-full text-center cursor-pointer hover:text-blue-700 flex items-center justify-center gap-2">
              <View size={16} /> <p>Voir plus</p></div>
          </div>
          )}
        </div>
        <div onClick={()=> setOpenNoti(!openNoti)} className="bg-white p-1.5 rounded-full font-bold text-[18px]  rounded-box relative z-8">
          <Bell className="hover:text-rose-500 cursor-pointer" />
          <p className="bg-red-500 px-2 rounded-full text-[14px] text-white absolute -top-2 left-[22px]">
                  3
                </p>

          {openNoti && (
            <div className="w-[250px] h-[40vh]  bg-white shadow-lg rounded-lg overflow-hidden flex items-center justify-between p-2 flex-col  absolute top-15 -right-2 border border-gray-300">
            <div className="border-b-1 w-full text-sm border-gray-400 pb-2">
              <div className="flex justify-between items-center relative">
                <h2>Notification</h2>
                <p className="bg-red-500 px-1 rounded-full text-[14px] text-white absolute top-0 left-[84px]">
                  3
                </p>
                <p className="text-[12px] flex items-center text-blue-500 hover:text-blue-800 gap-1">
                  <CheckCheck size={16} />
                  <span className="cursor-pointer">Marquer tous</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between w-full hover:bg-gray-200 bg-green-100 rounded-lg px-1">
                <div className="bg-white rounded-full w-9 h-9 font-bold text-[16px] flex items-center justify-center  rounded-box">
                  <img src={User} alt="User" className=" rounded-full" />
                </div>
                <div className=" opacity-100  z-8">
                  <div className="ml-2 text-sm">
                    <h4 className="text-[10px] font-bold">Matenga Graace</h4>
                    <p className="text-[8px] text-gray-400">
                      Lorem, ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </div>
                <div className="text-[9px] w-[50px] flex flex-col items-end">
                  <p className="text-gray-600">12:22 min</p>
                  <p className="text-[12px] cursor-pointer"><CheckCheck size={16} /></p>
                </div>
              </div>
              <div className="flex items-center justify-between w-full hover:bg-gray-200 bg-green-100 rounded-lg px-1">
                <div className="bg-white rounded-full w-9 h-9 font-bold text-[16px] flex items-center justify-center  rounded-box">
                  <img src={User2} alt="User" className=" rounded-full" />
                </div>
                <div className=" opacity-100  z-8">
                  <div className="ml-2 text-sm">
                    <h4 className="text-[10px] font-bold">Ange Marie</h4>
                    <p className="text-[8px] text-gray-400">
                      Lorem, ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </div>
                <div className="text-[9px] w-[50px] flex flex-col items-end">
                  <p className="text-gray-600">12:22 min</p>
                  <p className="text-[12px] cursor-pointer"><CheckCheck size={16} /></p>
                </div>
              </div>
              <div className="flex items-center justify-between w-full hover:bg-gray-200 bg-green-100 rounded-lg px-1">
                <div className="bg-white rounded-full w-9 h-9 font-bold text-[16px] flex items-center justify-center  rounded-box">
                  <img src={User} alt="User" className=" rounded-full" />
                </div>
                <div className=" opacity-100  z-8">
                  <div className="ml-2 text-sm">
                    <h4 className="text-[10px] font-bold">Matenga Graace</h4>
                    <p className="text-[8px] text-gray-400">
                      Lorem, ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </div>
                <div className="text-[9px] w-[50px] flex flex-col items-end">
                  <p className="text-gray-600">10:12 min</p>
                  <p className="text-[12px] cursor-pointer"><CheckCheck size={16} /></p>
                </div>
              </div>
              <div className="flex items-center justify-between w-full hover:bg-gray-200 rounded-lg px-1">
                <div className="bg-white rounded-full w-9 h-9 font-bold text-[16px] flex items-center justify-center  rounded-box">
                  <img src={User2} alt="User" className=" rounded-full" />
                </div>
                <div className=" opacity-100  z-8">
                  <div className="ml-2 text-sm">
                    <h4 className="text-[10px] font-bold">Marie Ange</h4>
                    <p className="text-[8px] text-gray-400">
                      Lorem, ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </div>
                <div className="text-[9px] w-[50px] flex flex-col items-end">
                  <p className="text-gray-600">11:10 min</p>
                  <p className="text-[12px] cursor-pointer text-blue-500"><CheckCheck size={16} /></p>
                </div>
              </div>
              <div className="flex items-center justify-between w-full hover:bg-gray-200 rounded-lg px-1">
                <div className="bg-white rounded-full w-9 h-9 font-bold text-[16px] flex items-center justify-center  rounded-box">
                  <img src={User} alt="User" className=" rounded-full" />
                </div>
                <div className=" opacity-100  z-8">
                  <div className="ml-2 text-sm">
                    <h4 className="text-[10px] font-bold">Matenga Graace</h4>
                    <p className="text-[8px] text-gray-400">
                      Lorem, ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                </div>
                <div className="text-[9px] w-[50px] flex flex-col items-end">
                  <p className="text-gray-600">12:22 min</p>
                  <p className="text-[12px] cursor-pointer text-blue-500"><CheckCheck size={16} /></p>
                </div>
              </div>
            </div>
            <div className="text-[13px] font-semibold text-gray-700 border-t-1 border-gray-400 w-full text-center cursor-pointer hover:text-blue-700 flex items-center justify-center gap-2">
              <View size={16}/> <p>Voir plus</p>
            </div>
          </div>
          )}
        </div>

        <div className="flex items-center ">
          <div className="bg-white cursor-pointer rounded-full w-9 h-9 font-bold text-[18px] flex items-center justify-center  rounded-box">
            <img src={User} alt="User" className=" rounded-full" />
          </div>
          <div className="relative  opacity-100 bg-gray-100 z-8">
            <div onClick={() => setOpenProfil(!openProfil)} className="ml-2 text-sm cursor-pointer">
              <h4 className="text-[12px] font-bold">Matenga Graace</h4>
              <p className="text-[10px] text-gray-400">
                matengageace@gmail.com
              </p>
            </div>

            <Profil isOpen={openProfil} onClose={() => setOpenProfil(false)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
