
function ModaleEdit({isOpen,onClose}) {
       if (!isOpen) return null;
  return (
    <div>
        <div class="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
  <div class="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
    <div class="flex items-start justify-between">
      <h2 id="modalTitle" class="text-xl font-bold bg-blue-600 p-1 rounded-lg w-full text-gray-100 sm:text-2xl">Modifier Utilisateur</h2>

      <button onClick={onClose} type="button" class="-me-4 -mt-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600 focus:outline-none" aria-label="Close">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>

    <div class="mt-4">
     
      <label for="Confirm" class="mt-4 block w-[400px]">
        <span class="text-sm font-medium text-gray-700">
          Name:
        </span>
        <input type="text" id="Confirm" class="mt-0.5 w-full h-[40px] rounded border border-gray-400 outline-0 shadow-sm sm:text-sm"/>
      </label>
      <label for="Confirm" class="mt-4 block w-[400px]">
        <span class="text-sm font-medium text-gray-700">
          Role:
        </span>
        <select name="" id="" class="mt-0.5 w-full h-[40px] rounded border border-gray-400 outline-0 shadow-sm sm:text-sm">
            <option value="#">--------choisir role---------</option>
            <option value="Vampire Warrior">Vampire Warrior</option>
            <option value="Vampire Gentleman">Vampire Gentleman</option>
            <option value="Vampire Seductress">Vampire Seductress</option>
            <option value="Energy Vampire">Energy Vampire</option>
        </select>
      </label>
      <label for="Confirm" class="mt-4 block w-[400px]">
        <span class="text-sm font-medium text-gray-700">
          Status:
        </span>
        <select name="" id="" class="mt-0.5 w-full h-[40px] rounded border border-gray-400 outline-0 shadow-sm sm:text-sm">
            <option value="#">--------choisir status---------</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
        </select>
      </label>
      <label for="Confirm" class="mt-4 block w-[400px]">
        <span class="text-sm font-medium text-gray-700">
          DoB:
        </span>
        <input type="date" id="Confirm" class="mt-0.5 w-full h-[40px] rounded border border-gray-400 outline-0 shadow-sm sm:text-sm"/>
      </label>

    </div>

    <footer class="mt-6 flex justify-end gap-2">
      <button onClick={onClose} type="button" class="rounded bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200">
        Annuler
      </button>

      <button onClick={onClose} type="button" class="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
        Valider
      </button>
    </footer>
  </div>
</div>
    </div>
  )
}

export default ModaleEdit