import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const HeaderMenu = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session === null) redirect("/dashboard/sign-in");

  return (
    <header className="w-full flex flex-row justify-between border-b border-[#2e2e2e] h-[48px]">
      <div className="flex flex-row w-full h-12 max-h-12 items-center justify-between py-2 px-5">
        <span className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-[#ededed] hover:bg-[#2e2e2e] shadow-none focus-visible:outline-[#3e3e3e] border-transparent text-xs px-2.5 py-1">
          {session?.user.email}
        </span>
        <div className="flex flex-row gap-2">
          <div>
            <button className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-[#ededed] bg-[#2e2e2e]  border-[#3e3e3e] hover:border-[#3e3e3e] dark:bg-[#2e2e2e] hover:bg-[#3e3e3e] focus-visible:outline-[#155b3d] shadow-sm text-xs px-2.5 py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-shopping-cart"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 17h-11v-14h-2"></path>
                <path d="M6 5l14 1l-1 7h-13"></path>
              </svg>
            </button>
          </div>
          <div>
            <button className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-[#ededed] border-[#3e3e3e] hover:border-[#3e3e3e] bg-[#2e2e2e] hover:bg-[#3e3e3e] focus-visible:outline-[#155b3d] shadow-sm text-xs px-2.5 py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-bell"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
                <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMenu;
