"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const UserLinks = ({ userInfo }: { userInfo: UserWithPosts[] }) => {
  const pathname = usePathname();
  return (
    <ul className="flex flex-row justify-evenly items-center">
      <li
        className={`text-sm cursor-pointer  p-2 hover:text-white ${
          pathname.split("/")[1] === userInfo[0]?.user_name &&
          !pathname.split("/")[2]
            ? "text-white font-bold border-b-3 border-sky-600"
            : "text-[#71767b]"
        }`}
      >
        <Link href={`/${userInfo && userInfo[0]?.user_name}`}>Posts</Link>
      </li>
      <li
        className={`text-sm cursor-pointer  p-2 hover:text-white ${
          pathname.split("/")[2] === "replies"
            ? "text-white font-bold border-b-3 border-sky-600"
            : "text-[#71767b]"
        }`}
      >
        <Link href={`/${userInfo && userInfo[0]?.user_name}/replies`}>
          Respuestas
        </Link>
      </li>
      <li
        className={`text-sm cursor-pointer  p-2 hover:text-white ${
          pathname.split("/")[2] === "highlights"
            ? "text-white font-bold border-b-3 border-sky-600"
            : "text-[#71767b]"
        }`}
      >
        <Link href={`/${userInfo && userInfo[0]?.user_name}/highlights`}>
          Destacado
        </Link>
      </li>
      <li
        className={`text-sm cursor-pointer  p-2 hover:text-white ${
          pathname.split("/")[2] === "media"
            ? "text-white font-bold border-b-3 border-sky-600"
            : "text-[#71767b]"
        }`}
      >
        <Link href={`/${userInfo && userInfo[0]?.user_name}/media`}>
          Videos y fotos
        </Link>
      </li>
      <li
        className={`text-sm cursor-pointer  p-2 hover:text-white ${
          pathname.split("/")[2] === "likes"
            ? "text-white font-bold border-b-3 border-sky-600"
            : "text-[#71767b]"
        }`}
      >
        <Link href={`/${userInfo && userInfo[0]?.user_name}/likes`}>
          Me gustas
        </Link>
      </li>
    </ul>
  );
};

export default UserLinks;
