"use client";
import React, { useEffect, useState } from "react";
import { Tooltip } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import noImage from "../../../public/not-user.webp";
import { NextUIProvider } from "@nextui-org/react";
import { Session } from "@supabase/auth-helpers-nextjs";

const TooltipUser = ({
  post,
  session,
}: {
  post: PostWithAuthor | LikedPosts;
  session: Session;
}) => {
  return (
    <NextUIProvider>
      <Tooltip
        className="bg-[#1c1c1c] w-full p-4 focus:border-[#494949]
              focus:ring-[#313131] placeholder-[#505050] border border-[#3e3e3e]"
        content={
          <div className="">
            <div className="flex flex-row gap-20">
              <div>
                <Link href={`/${post.users.user_name}`}>
                  <Image
                    alt={post.users.user_name}
                    src={post.users.avatar_url || noImage}
                    width={1080}
                    height={1080}
                    className="h-[70px] w-[70px] rounded-full flex self-center cursor-pointer select-none"
                  />
                </Link>
              </div>

              {session && post.user_id !== session.user.id ? (
                <button className="h-full px-5 py-[7px] cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-2xl outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-black border-white hover:border-[#fff] bg-[#fff] hover:bg-[#fff]/60 focus-visible:outline-[#155b3d] shadow-sm text-sm font-bold ">
                  Seguir
                </button>
              ) : (
                <div className="w-[86px] h-[20]"></div>
              )}
            </div>
            <div className="flex flex-col">
              <Link href={`/${post.users.user_name}`}>
                <span className="text-white font-bold block text-xl cursor-pointer hover:underline">
                  {post.users.name}
                </span>
              </Link>
              <Link href={`/${post.users.user_name}`}>
                <span className="text-gray-400 font-light block text-sm cursor-pointer">
                  @{post.users.user_name}
                </span>
              </Link>
            </div>
            <div className="flex flex-row gap-2 mt-2 text-gray-400 font-light  text-sm">
              <span className="flex flex-row gap-1 cursor-pointer hover:underline">
                <strong className="text-white font-bold block text-md">
                  0
                </strong>
                Siguiendo
              </span>
              <span className="ml-2 flex flex-row gap-1 cursor-pointer hover:underline">
                <strong className="text-white font-bold block text-md">
                  12
                </strong>
                Seguidores
              </span>
            </div>
          </div>
        }
        delay={500}
      >
        <Link href={`/${post?.users.user_name}`}>
          <Image
            src={post.users.avatar_url || noImage}
            alt={post.user_id || post.users.user_name}
            width={900}
            height={900}
            className="h-10 w-10 rounded-full select-none outline-none cursor-pointer"
          />
        </Link>
      </Tooltip>
    </NextUIProvider>
  );
};

export default TooltipUser;
