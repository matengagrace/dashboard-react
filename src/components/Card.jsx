import { MoveUpRight,Triangle } from "lucide-react";
function Card() {
  return (
    <div className="mb-6">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        <div class="h-35 rounded-2xl bg-white shadow-lg p-2.5 flex flex-col justify-between hover:bg-green-700 hover:text-white transition-all duration-300">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Total Projects</h4>
            <MoveUpRight size={26} className="border rounded-full p-1" />
          </div>
          <h2 className="font-bold text-[40px]">24</h2>
          <p className="text-[12px] text-green-400 flex items-center"> <span className="border border-green-400 px-1 text-[14px] items-center inline-flex mr-2 rounded-full gap-1">5 <Triangle size={10} className="text-black" /></span> inscrease from last month</p>
        </div>
        <div class="h-35 rounded-2xl bg-white shadow-lg p-2.5 flex flex-col justify-between hover:bg-green-700 hover:text-white transition-all duration-300">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Ended Projects</h4>
            <MoveUpRight size={26} className="border rounded-full p-1" />
          </div>
          <h2 className="font-bold text-[40px]">10%</h2>
          <p className="text-[12px] text-green-400 flex items-center"> <span className="border border-green-400 px-1 text-[14px] items-center inline-flex mr-2 rounded-full gap-1">6 <Triangle size={10} className="text-black" /></span> inscrease from last month</p>
        </div>
        <div class="h-35 rounded-2xl bg-white shadow-lg p-2.5 flex flex-col justify-between hover:bg-green-700 hover:text-white transition-all duration-300">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Running Projects</h4>
            <MoveUpRight size={26} className="border rounded-full p-1" />
          </div>
          <h2 className="font-bold text-[40px]">12</h2>
          <p className="text-[12px] text-green-400 flex items-center"> <span className="border border-green-400 px-1 text-[14px] items-center inline-flex mr-2 rounded-full gap-1">2 <Triangle size={10} className="text-black" /></span> inscrease from last month</p>
        </div>
        <div class="h-35 rounded-2xl bg-white shadow-lg p-2.5 flex flex-col justify-between hover:bg-green-700 hover:text-white transition-all duration-300">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Pending Projects</h4>
            <MoveUpRight size={26} className="border rounded-full p-1" />
          </div>
          <h2 className="font-bold text-[40px]">2</h2>
          <p className="text-[12px] text-green-400">On Discuss</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
