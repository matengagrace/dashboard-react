function ModaleDelete({isOpen, onClose}) {
     if (!isOpen) return null;
  return (
    <div>
      <div
        class="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
      >
        <div class="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
          <h2
            id="modalTitle"
            class="text-xl font-bold text-gray-100 bg-red-600 p-1 rounded-lg sm:text-2xl"
          >
            Suppression
          </h2>

          <div class="mt-4 ">
            <p class="text-pretty text-gray-700">
              Voulez-vous supprimer cette personne?
            </p>
          </div>

          <footer class="mt-6 flex justify-end gap-2">
            <button onClick={onClose}
              type="button"
              class="rounded bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
            >
              Annuler
            </button>

            <button onClick={onClose}
              type="button"
              class="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Valider
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default ModaleDelete;
