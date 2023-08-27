import Image from "next/image";
import Link from "next/link";
import React from "react";

const AsideBar = () => {
  return (
    <aside className="col-span-3 h-screen bg-[#1c1c1c] px-2 py-1 flex-col flex justify-between border-r border-[#2e2e2e]">
      <div>
        <ul className="border-b pb-2 border-[#2e2e2e]">
          <li className="mb-2">
            <Image
              className="mx-auto h-[40px] w-6 cursor-pointer rounded"
              src="https://supabase.com/dashboard/img/supabase-logo.svg"
              alt=""
              width={20}
              height={20}
            />
          </li>
          <li>
            <Link
              href="/"
              className="transition-colors duration-200 flex items-center justify-center h-10 w-10 rounded hover:bg-[#2e2e2e] text-scale-900 hover:text-[#ededed]  bg-[#2e2e2e] shadow-sm text-[#707070]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-home text-[]"
                width="100"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
              </svg>
            </Link>
          </li>
        </ul>
        <ul className="border-b pb-2 border-[#2e2e2e]">
          <li className="mt-2">
            <Link
              href="/dashboard/to-do"
              className="transition-colors duration-200 flex items-center justify-center h-10 w-10 rounded hover:bg-[#2e2e2e] text-scale-900 hover:text-[#ededed]  bg-[#1c1c1c] shadow-sm text-[#707070]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-checklist"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8"></path>
                <path d="M14 19l2 2l4 -4"></path>
                <path d="M9 8h4"></path>
                <path d="M9 12h2"></path>
              </svg>
            </Link>
          </li>
          <li className="mt-2">
            <Link
              href="/dashboard/cart"
              className="transition-colors duration-200 flex items-center justify-center h-10 w-10 rounded hover:bg-[#2e2e2e] text-scale-900 hover:text-[#ededed]  bg-[#1c1c1c] shadow-sm text-[#707070]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-shopping-bag"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"></path>
                <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
              </svg>
            </Link>
          </li>
        </ul>
        <ul>
          <li className="mt-2">
            <Link
              href="/dashboard/to-do"
              className="transition-colors duration-200 flex items-center justify-center h-10 w-10 rounded hover:bg-[#2e2e2e] text-scale-900 hover:text-[#ededed]  bg-[#1c1c1c] shadow-sm text-[#707070]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chart-line"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 19l16 0"></path>
                <path d="M4 15l4 -6l4 2l4 -5l4 4"></path>
              </svg>
            </Link>
          </li>
          <li className="mt-2">
            <Link
              href="/dashboard/cart"
              className="transition-colors duration-200 flex items-center justify-center h-10 w-10 rounded hover:bg-[#2e2e2e] text-scale-900 hover:text-[#ededed]  bg-[#1c1c1c] shadow-sm text-[#707070]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-list"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 6l11 0"></path>
                <path d="M9 12l11 0"></path>
                <path d="M9 18l11 0"></path>
                <path d="M5 6l0 .01"></path>
                <path d="M5 12l0 .01"></path>
                <path d="M5 18l0 .01"></path>
              </svg>
            </Link>
          </li>
          <li className="mt-2">
            <Link
              href="/dashboard/cart"
              className="transition-colors duration-200 flex items-center justify-center h-10 w-10 rounded hover:bg-[#2e2e2e] text-scale-900 hover:text-[#ededed]  bg-[#1c1c1c] shadow-sm text-[#707070]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-clipboard"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
                <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
              </svg>
            </Link>
          </li>
          <li className="mt-2">
            <Link
              href="/dashboard/cart"
              className="transition-colors duration-200 flex items-center justify-center h-10 w-10 rounded hover:bg-[#2e2e2e] text-scale-900 hover:text-[#ededed]  bg-[#1c1c1c] shadow-sm text-[#707070]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-settings"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
              </svg>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="mb-4">
            <Link
              href="/dashboard/settings"
              className="transition-colors duration-200 flex items-center justify-center h-10 w-10 rounded hover:bg-[#2e2e2e] text-scale-900 hover:text-[#ededed]  bg-[#1c1c1c] shadow-sm text-[#707070]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-search"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                <path d="M21 21l-6 -6"></path>
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/user"
              className="transition-colors duration-200 flex items-center justify-center h-10 w-10 rounded hover:bg-[#2e2e2e] text-scale-900 hover:text-[#ededed]  bg-[#1c1c1c] shadow-sm text-[#707070]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-user scale-95"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AsideBar;
