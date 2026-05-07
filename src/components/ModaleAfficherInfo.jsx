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
        <div class="w-[450px] h-[90vh] rounded-lg bg-white p-5 shadow-lg dark:bg-white flex flex-col justify-between relative">
          <h2 id="modalTitle" class="text-xl text-center font-bold rounded-lg text-gray-800 sm:text-2xl mb-[18%]">
            Information pour Nandor
          </h2>
          <div className="absolute w-[160px] h-[160px] rounded-full bg-gray-300 left-[33%] top-[14%]">
            <img src={User} alt="user" />
          </div>

          <div class="mt-[30px] gap-1 flex flex-col w-full h-[60%] bg-gray-100 rounded-lg border border-gray-300">
            <div className="w-full text-[20px] flex gap-2 mt-[140px] justify-between bg-white p-2">
              <h5 className="font-semibold">Name:</h5>
              <p>Nandor the Relentless</p>
            </div>
            <div className="w-full text-[20px] flex gap-2 justify-between bg-white p-2">
              <h5 className="font-semibold">DoB:</h5>
              <p>04/06/1262</p>
            </div>
            <div className="w-full text-[20px] flex gap-2 justify-between bg-white p-2">
              <h5 className="font-semibold">Role:</h5>
              <p>Vampire Warrior</p>
            </div>
            <div className="w-full text-[20px] flex gap-2  items-center justify-between bg-white p-2">
              <h5 className="font-semibold">Status:</h5>
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
