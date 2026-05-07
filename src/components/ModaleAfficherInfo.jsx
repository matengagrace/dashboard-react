import User from "../assets/avatar.png";

function ModaleAfficherInfo({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div>
      <div
        class="fixed inset-0 z-50 grid place-content-center text-black bg-black/50 p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
      >
        <div class="w-[600px] rounded-lg  bg-white p-5 shadow-lg dark:bg-white flex flex-col justify-between relative">
          <h2 id="modalTitle" class="border-b-1 border-gray-300 pb-2 text-xl text-center font-bold text-gray-700 sm:text-2xl">
            Information pour Nandor
          </h2>
         

          <div class="mt-[50px] gap-y-9 grid grid-cols-2 justify-between w-full py-6 px-3 bg-gray-100 rounded-lg border border-gray-300">
            <div className=" text-[20px] flex flex-col gap-1  justify-between p-2">
              <h5 className="font-semibold text-gray-700">Name</h5>
              <p className="text-lg text-gray-600">Nandor the Relentless</p>
            </div>
            <div className="items-center text-[20px] flex flex-col gap-1 justify-between p-2">
              <h5 className="font-semibold text-gray-700">DoB</h5>
              <p className="text-lg text-gray-600">04/06/1262</p>
            </div>
            <div className=" text-[20px] flex gap-1 flex-col justify-between p-2">
              <h5 className="font-semibold text-gray-700">Role</h5>
              <p className="text-lg text-gray-600">Vampire Warrior</p>
            </div>
            <div className="items-center text-[20px] flex gap-1 flex-col items-center justify-between p-2">
              <h5 className="font-semibold text-gray-700">Status</h5>
              <p className="nline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-green-800 bg-green-200 rounded-full">Active</p>
            </div>
          
            
          </div>

          <footer class="mt-6 flex justify-end gap-2">
            <button
              onClick={onClose}
              type="button"
              class="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Fermer
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default ModaleAfficherInfo;
