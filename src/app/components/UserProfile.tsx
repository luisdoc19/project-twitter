import Image from "next/image";
import Link from "next/link";
import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import noUser from "../../../public/not-user.webp";
import noImage from "../../../public/no-image.png";
import UserLinks from "./UserLinks";

const UserProfile = async ({ id }: { id: string }) => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) redirect("/dashboard/sign-in");
  const { data: user } = await supabase
    .from("users")
    .select("*, posts(*)")
    .eq("user_name", id);

  const userInfo = user;
  if (userInfo?.length === 0) return redirect("/not-found");

  return (
    userInfo?.length && (
      <header className="border-b border-[#2e2e2e]">
        <div className="flex gap-5 px-4 pt-2 pb-1 fixed top-12 backdrop-blur-lg backdrop-saturate-[37%] bg-[rgba(32,32,32,0.64)] w-[599px] border-r border-[#2e2e2e] z-30">
          <div className="text-[#fff] flex self-center">
            <Link href={"/"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-left"
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
                <path d="M5 12l14 0"></path>
                <path d="M5 12l6 6"></path>
                <path d="M5 12l6 -6"></path>
              </svg>
            </Link>
          </div>
          <div className="flex flex-col text-gray-400 font-light text-xs">
            <h2 className="text-white font-bold block text-xl cursor-pointer">
              {userInfo && userInfo[0]?.name}
            </h2>
            <span>{userInfo !== null && userInfo[0].posts.length} posts</span>
          </div>
        </div>
        <div className="mt-14">
          <Image
            src={noImage}
            className="max-w-[100%] h-auto block"
            width={1920}
            height={1080}
            alt=""
          />
        </div>
        <div>
          <div className="ml-4 flex flex-row h-20 justify-between">
            <div>
              <Image
                src={userInfo[0].avatar_url || noUser}
                width={600}
                height={600}
                className="w-[100px] relative top-[-50px] rounded-full border-3 border-[#1c1c1c] sm:w-[140px] sm:top-[-70px]"
                alt=""
              />
            </div>
            <div>
              {userInfo && userInfo[0].id === session.user.id && (
                <button className="flex self-start mt-4 mr-2 font-bold relative justify-center cursor-pointer items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-[#ededed] bg-[#2e2e2e]  border-[#3e3e3e] hover:border-[#3e3e3e] dark:bg-[#2e2e2e] hover:bg-[#3e3e3e] focus-visible:outline-[#155b3d] shadow-sm text-xs px-2 py-1">
                  Editar perfil
                </button>
              )}
            </div>
          </div>
          <div className="ml-4">
            <div className="flex flex-col py-2">
              <h2 className="text-white font-bold w-max text-xl cursor-pointer hover:underline">
                {userInfo && userInfo[0].name}
              </h2>
              <span className="text-[#71767b]  font-light block text-sm cursor-pointer">
                @{userInfo && userInfo[0].user_name}
              </span>
            </div>
            <div>
              <span className="text-[#e7e9ea] text-sm">
                {userInfo && userInfo[0]?.bio}
              </span>
            </div>
            <div className="flex flex-row mt-2 text-[#71767b] font-light text-sm gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-calendar"
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
                <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path>
                <path d="M16 3v4"></path>
                <path d="M8 3v4"></path>
                <path d="M4 11h16"></path>
                <path d="M11 15h1"></path>
                <path d="M12 15v3"></path>
              </svg>
              <span>
                Se unio en{" "}
                {userInfo &&
                  new Date(userInfo[0].created_at).toLocaleDateString()}
              </span>
            </div>
            <div className="flex flex-row gap-2 mt-2 text-gray-400 font-light  text-sm">
              <span className="flex flex-row gap-1 cursor-pointer hover:underline font-extralight">
                <strong className="text-white font-bold block text-md">
                  0
                </strong>
                Siguiendo
              </span>
              <span className="ml-2 flex flex-row gap-1 cursor-pointer hover:underline font-extralight">
                <strong className="text-white font-bold block text-md">
                  12
                </strong>
                Seguidores
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <UserLinks userInfo={userInfo} />
        </div>
      </header>
    )
  );
};

export default UserProfile;
