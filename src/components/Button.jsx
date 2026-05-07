function Button({ title }) {
  return (
    <div>
      <a
        class="group relative inline-flex items-center overflow-hidden rounded-full border border-current px-4 lg:px-8 p-1 lg:py-2 text-green-700 hover:bg-green-700 hover:text-white focus:outline-none focus:ring active:bg-green-900"
        href="#"
      >
        <span class="absolute -start-full transition-all group-hover:start-4 hover:text-white">
          <svg
            class="size-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </span>

        <span class="text-[10px] lg:text-sm font-medium transition-all lg:group-hover:ms-4 hover:text-white">
          {" "}
          {title}{" "}
        </span>
      </a>
    </div>
  );
}

export default Button;
