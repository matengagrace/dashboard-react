  import {SquarePen,Trash2, Eye} from "lucide-react";
function Tableau({onClick,OnDelete,onEdit}) {
  return (
    <div className="bg-white ">
      <div class="overflow-x-auto rounded border border-gray-300 shadow-sm">
        <table class="min-w-full divide-y-2 divide-gray-200">
          <thead class="ltr:text-left rtl:text-right">
            <tr class="*:font-bold *:text-gray-900">
              <th class="px-3 py-2 whitespace-nowrap">Name</th>
              <th class="px-3 py-2 whitespace-nowrap">DoB</th>
              <th class="px-3 py-2 whitespace-nowrap">Role</th>
              <th class="px-3 py-2 whitespace-nowrap">Status</th>
              <th class="px-3 py-2 whitespace-nowrap text-center">Actions</th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">
            <tr class="*:text-gray-900 *:first:font-medium hover:bg-gray-100">
              <td class="px-3 py-2 whitespace-nowrap">Nandor the Relentless</td>
              <td class="px-3 py-2 whitespace-nowrap">04/06/1262</td>
              <td class="px-3 py-2 whitespace-nowrap">Vampire Warrior</td>
              <td class="px-3 py-2 whitespace-nowrap">
                <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-green-800 bg-green-200 rounded-full">
                  Active
                </span>
              </td>
              <td class="px-3 py-2 whitespace-nowrap flex items-center justify-center">
                <button onClick={onClick} className="border border-gray-300 p-0.5 rounded-[8px] cursor-pointer hover:bg-green-700 text-green-500 hover:text-white transition-all duration-300">
                 <Eye />
                </button>
                <button onClick={onEdit} className="border border-gray-300 p-0.5 rounded-[8px] cursor-pointer hover:bg-blue-700 text-blue-500 hover:text-white transition-all duration-300 ml-2">
                  <SquarePen />
                </button>
                <button onClick={OnDelete} className="border border-gray-300 p-0.5 rounded-[8px] cursor-pointer hover:bg-red-700 text-red-500 hover:text-white transition-all duration-300 ml-2">
                  <Trash2 />
                </button>
              </td>
            </tr>

            <tr class="*:text-gray-900 *:first:font-medium hover:bg-gray-100">
              <td class="px-3 py-2 whitespace-nowrap">Laszlo Cravensworth</td>
              <td class="px-3 py-2 whitespace-nowrap">19/10/1678</td>
              <td class="px-3 py-2 whitespace-nowrap">Vampire Gentleman</td>
              <td class="px-3 py-2 whitespace-nowrap">
                <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-800 bg-red-200 rounded-full">
                  Inactive
                </span>
              </td>
              <td class="px-3 py-2 whitespace-nowrap flex items-center justify-center">
                  <button onClick={onClick} className="border border-gray-300 p-0.5 rounded-[8px] cursor-pointer hover:bg-green-700 text-green-500 hover:text-white transition-all duration-300">
                 <Eye />
                </button>
                <button onClick={onEdit} className="border border-gray-300 p-0.5 rounded-[8px] cursor-pointer hover:bg-blue-700 text-blue-500 hover:text-white transition-all duration-300 ml-2">
                  <SquarePen />
                </button>
                <button onClick={OnDelete} className="border border-gray-300 p-0.5 rounded-[8px] cursor-pointer hover:bg-red-700 text-red-500 hover:text-white transition-all duration-300 ml-2">
                  <Trash2 />
                </button>
              </td>
            </tr>

            <tr class="*:text-gray-900 *:first:font-medium hover:bg-gray-100">
              <td class="px-3 py-2 whitespace-nowrap">Nadja</td>
              <td class="px-3 py-2 whitespace-nowrap">15/03/1593</td>
              <td class="px-3 py-2 whitespace-nowrap">Vampire Seductress</td>
              <td class="px-3 py-2 whitespace-nowrap">
                <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-green-800 bg-green-200 rounded-full">
                  Active
                </span>
              </td>
              <td class="px-3 py-2 whitespace-nowrap flex items-center justify-center">
                 <button onClick={onClick} className="border border-gray-300 p-0.5 rounded-[8px] cursor-pointer hover:bg-green-700 text-green-500 hover:text-white transition-all duration-300">
                 <Eye />
                </button>
                <button onClick={onEdit} className="border border-gray-300 p-0.5 rounded-[8px] cursor-pointer hover:bg-blue-700 text-blue-500 hover:text-white transition-all duration-300 ml-2">
                  <SquarePen />
                </button>
                <button onClick={OnDelete} className="border border-gray-300 p-0.5 rounded-[8px] cursor-pointer hover:bg-red-700 text-red-500 hover:text-white transition-all duration-300 ml-2">
                  <Trash2 />
                </button>
              </td>
            </tr>

            <tr class="*:text-gray-900 *:first:font-medium hover:bg-gray-100">
              <td class="px-3 py-2 whitespace-nowrap">Colin Robinson</td>
              <td class="px-3 py-2 whitespace-nowrap">01/09/1971</td>
              <td class="px-3 py-2 whitespace-nowrap">Energy Vampire</td>
              <td class="px-3 py-2 whitespace-nowrap">
                <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-800 bg-red-200 rounded-full">
                  Inactive
                </span>
              </td>
              <td class="px-3 py-2 whitespace-nowrap flex items-center justify-center">
                   <button onClick={onClick} className="border border-gray-300 p-0.5 rounded-[8px] cursor-pointer hover:bg-green-700 text-green-500 hover:text-white transition-all duration-300">
                 <Eye />
                </button>
                <button onClick={onEdit} className="border border-gray-300 p-0.5 rounded-[8px] cursor-pointer hover:bg-blue-700 text-blue-500 hover:text-white transition-all duration-300 ml-2">
                  <SquarePen />
                </button>
                <button onClick={OnDelete} className="border border-gray-300 p-0.5 rounded-[8px] cursor-pointer hover:bg-red-700 text-red-500 hover:text-white transition-all duration-300 ml-2">
                  <Trash2 />
                </button>
              </td>
            </tr>

            <tr class="*:text-gray-900 *:first:font-medium hover:bg-gray-100">
              <td class="px-3 py-2 whitespace-nowrap">Guillermo de la Cruz</td>
              <td class="px-3 py-2 whitespace-nowrap">18/11/1991</td>
              <td class="px-3 py-2 whitespace-nowrap">
                Familiar/Vampire Hunter
              </td>
              <td class="px-3 py-2 whitespace-nowrap">
                <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-green-800 bg-green-200 rounded-full">
                  Active
                </span>
              </td>
              <td class="px-3 py-2 whitespace-nowrap flex items-center justify-center">
                 <button onClick={onClick} className="border border-gray-300 p-0.5 rounded-[8px] cursor-pointer hover:bg-green-700 text-green-500 hover:text-white transition-all duration-300">
                 <Eye />
                </button>
                <button onClick={onEdit} className="border border-gray-300 p-0.5 rounded-[8px] cursor-pointer hover:bg-blue-700 text-blue-500 hover:text-white transition-all duration-300 ml-2">
                  <SquarePen />
                </button>
                <button onClick={OnDelete} className="border border-gray-300 p-0.5 rounded-[8px] cursor-pointer hover:bg-red-700 text-red-500 hover:text-white transition-all duration-300 ml-2">
                  <Trash2 />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tableau;
