import GitHub from "@/app/components/GitHub";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import React from "react";
import Google from "@/app/components/Google";
import FormSignUp from "@/app/components/FormSignUp";

export const metadata = {
  title: "Supabase",
  description:
    "Register page on a project example with Login, also it has some bakend teconologies",
};

const SignUpPage = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session !== null) {
    redirect("/");
  }
  return (
    <>
      <div className="mb-10">
        <h1 className="text-[#ededed] text-2xl lg:text-2xl mt-8 mb-2">
          Get started
        </h1>
        <h2 className="text-sm text-scale-1100 text-[#bbbbbb]">
          Create a new account
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <GitHub />
        <Google />
        <div className="flex flex-row items-center border-scale">
          <div className="bg-[#3e3e3e] w-[160px] h-[1px] lg:w-[180px]"></div>
          <span className="bg-[#1c1c1c] px-2 text-sm text-[#ededed]">or</span>
          <div className="bg-[#3e3e3e] w-[160px] h-[1px] lg:w-[180px]"></div>
        </div>
        <FormSignUp />
      </div>
      <div className="my-8 self-center text-sm">
        <span className="text-[#7e7e7e]">Have an account? </span>
        <Link
          href="/dashboard/sign-in"
          className="underline text-[#ededed] hover:text-[#bbb] transition"
        >
          Sign In Now
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;
