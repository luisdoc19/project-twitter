import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <div className="absolute top-0 w-full px-8 mx-auto sm:px-6 lg:px-8 pt-6">
      <nav className="relative flex items-center justify-between sm:h-10">
        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href={"/dashboard/"}>
              <span>
                <img
                  src="https://supabase.com/dashboard/_next/image?url=%2Fdashboard%2Fimg%2Fsupabase-dark.svg&w=128&q=75"
                  alt=""
                  className="w-[120px] h-[22px]"
                />
              </span>
            </Link>
          </div>
        </div>
        <div className="items-center hidden space-x-3 md:ml-10 md:flex md:pr-4">
          <button
            className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-[#ededed] bg-[#161616] hover:bg-[#232323] border-[#343434] hover:border-[#3e3e3e] dark:border-[#3e3e3e] hover:dark:border-[#505050] dark:bg-[#2e2e2e] dark:hover:bg-[#343434] focus-visible:outline-[#10472f] shadow-sm text-xs px-2.5 py-1"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sbui-icon text-[#7e7e7e]"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polygon points="14 2 14 8 20 8"></polygon>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polygon points="10 9 9 9 8 9"></polygon>
            </svg>
            <span className="truncate">Documentation</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
