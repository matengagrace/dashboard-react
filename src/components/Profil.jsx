import Cover from "../assets/cover.jpg";
import User from "../assets/user-avatar.png";
import { Plus,CircleX } from 'lucide-react';
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaThreads } from "react-icons/fa6";

function Profil({isOpen, onClose}) {
     if (!isOpen) return null
  return (
    <div className="w-[350px] h-[80vh]  bg-white shadow-lg rounded-lg flex items-center justify-between p-3 flex-col gap-3 absolute top-15 -right-2 border border-gray-300">
      <div className="relative w-full">
        <div className="w-full h-40  bg-gray-300 rounded-lg overflow-hidden">
          <img src={Cover} alt="Cover" className="w-full h-full bg-cover" />
        </div>
        <div className="w-[120px] h-[120px] p-1.5 bg-white rounded-full shadow-md absolute -bottom-[60px] left-[80px] transform -translate-x-1/2 overflow-hidden">
          <img src={User} alt="profil" className="wi-full h-full bg-gray-200 rounded-full" />
        </div>
        <div onClick={onClose} className="w-[40px] h-[40px] rounded-full bg-gray-200 shadow-md absolute top-[10px] right-[10px] flex items-center justify-center cursor-pointer hover:text-blue-500">
             {/* <Plus /> */}
             <CircleX />
        </div>
      </div>
      
      <div className="mx-5 mt-9">
        <h1 className="font-bold text-[25px]">Matenga Grace</h1>
        <p className="text-sm max-w-[300px] text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aliquam optio esse sunt molestiae omnis.</p>
      </div>

      <div className="w-full h-[90px] bg-gray-200 shadow-lg rounded-lg border-2 border-gray-300 flex items-center justify-around mt-6">
        <div className="border-r-1 p-3 border-gray-400 flex flex-col items-center justify-center w-full h-full">
            <h4 className="text-[20px] font-semibold">79.5K</h4>
            <p className="text-gray-600 text-lg">Likes</p>
        </div>
        <div className="border-r-1 p-3 border-gray-400 flex flex-col items-center justify-center w-full h-full">
            <h4 className="text-[20px] font-semibold">889</h4>
            <p className="text-gray-600 text-lg">Posts</p>
        </div>
        <div className=" p-3 flex flex-col items-center justify-center w-full h-full">
            <h4 className="text-[20px] font-semibold">979.5K</h4>
            <p className="text-gray-600 text-lg">Views</p>
        </div>
      </div>

      <div className="w-full h-[30px]  flex item-center justify-center rounded-lg gap-8 ">
        <FaInstagram  className="w-5.5 h-5.5 cursor-pointer hover:bg-black hover:text-white hover:p-0.5 hover:rounded-lg"/>
        <BsTwitterX  className="w-5.5 h-5.5 cursor-pointer hover:bg-black hover:text-white hover:p-0.5 hover:rounded-lg"/>
        <FaThreads  className="w-5.5 h-5.5 cursor-pointer hover:bg-black hover:text-white hover:p-0.5 hover:rounded-lg"/>
      </div>
    </div>
  );
}

export default Profil;
