import GitHub from "@/app/components/GitHub";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import Google from "@/app/components/Google";
import FormSignIn from "@/app/components/FormSignIn";

export const metadata = {
  title: "Supabase",
  description:
    "Register page on a project example with Login, also it has some bakend teconologies",
};

export const dynamic = "force-dynamic";

const LoginPage = async () => {
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
          Welcome back
        </h1>
        <h2 className="text-sm text-scale-1100 text-[#bbbbbb]">
          Sign in to your account
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
        <FormSignIn />
      </div>
      <div className="my-8 self-center text-sm">
        <span className="text-[#7e7e7e]">Don&apos;t have an account?</span>
        <Link
          href="/dashboard/sign-up"
          className="underline text-[#ededed] hover:text-[#bbb] transition"
        >
          Sign Up Now
        </Link>
      </div>
    </>
  );
};

export default LoginPage;
