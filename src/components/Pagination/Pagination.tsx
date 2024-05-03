import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";

const Pagination = () => {
  return (
    <div className="flex items-center justify-between border-gray-200 px-4 py-3 sm:px-6">
      <nav
        className="isolate inline-flex xs:flex-wrap -space-x-px rounded-lg shadow-sm gap-2 xs:gap-1"
        aria-label="Pagination"
      >
        <a
          href="#"
          className="relative inline-flex items-center rounded-xl px-2 py-2 text-white  bg-gray-800 hover:bg-gray-50 hover:text-black focus:z-20 focus:outline-offset-0"
        >
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </a>
        <a
          href="#"
          aria-current="page"
          className="relative inline-flex items-center rounded-xl px-4 py-2 text-white  bg-pink-600 hover:bg-gray-50 hover:text-black focus:z-20 focus:outline-offset-0"
        >
          1
        </a>
        <a
          href="#"
          className="relative inline-flex items-center rounded-xl px-4 py-2 text-white  bg-gray-800 hover:bg-gray-50 hover:text-black focus:z-20 focus:outline-offset-0"
        >
          2
        </a>
        <a
          href="#"
          className="relative inline-flex items-center rounded-xl px-4 py-2 text-white  bg-gray-800 hover:bg-gray-50 hover:text-black focus:z-20 focus:outline-offset-0"
        >
          3
        </a>
        <a
          href="#"
          className="relative inline-flex md:inline-flex xs:hidden items-center rounded-xl px-4 py-2 text-white  bg-gray-800 hover:bg-gray-50 hover:text-black focus:z-20 focus:outline-offset-0"
        >
          4
        </a>
        <a
          href="#"
          className="relative inline-flex md:inline-flex xs:hidden  items-center rounded-xl px-4 py-2 text-white  bg-gray-800 hover:bg-gray-50 hover:text-black focus:z-20 focus:outline-offset-0"
        >
          5
        </a>
        <span className="relative inline-flex  items-center rounded-xl px-4 py-2 text-white  bg-gray-800 hover:bg-gray-50 hover:text-black focus:z-20 focus:outline-offset-0">
          ...
        </span>
        <a
          href="#"
          className="relative inline-flex  items-center rounded-xl px-4 py-2 text-white  bg-gray-800 hover:bg-gray-50 hover:text-black focus:z-20 focus:outline-offset-0"
        >
          100
        </a>
        <a
          href="#"
          className="relative inline-flex items-center rounded-xl px-2 py-2 text-white  bg-gray-800 hover:bg-gray-50 hover:text-black focus:z-20 focus:outline-offset-0"
        >
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </a>
      </nav>

      <button className="p-1.5 text-gray-500 border-2 border-gray-500 rounded-full md:flex sm:flex xs:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
