"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import React from "react";

const FormSignUp = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const userRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const handleSubmitSignIn = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const fields = Object.fromEntries(new FormData(event.currentTarget));

    const { data, error } = await supabase.auth.signUp({
      email: fields.email.toString(),
      password: fields.password.toString(),
      options: {
        emailRedirectTo: "http://localhost:3000/sign-in",
        data: {
          user_name: fields.user.toString(),
        },
      },
    });
    if (!error) {
      router.push("/");
    }
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmitSignIn}>
      <div className="relative">
        <label className="text-[#bbb] text-sm text-scale-1100">Email</label>
        <input
          ref={userRef}
          type="text"
          name="user"
          placeholder="@username"
          className="peer/input outline-none block box-border w-full scale-100 rounded-md shadow-sm transition-all text-[#ededed] bg-[#222222] focus:shadow-md focus:ring-current focus:ring-2 focus:border-[#494949]
            focus:ring-[#313131] placeholder-[#505050] border border-[#3e3e3e] text-sm px-4 py-2 mt-2"
        />
      </div>
      <div className="relative">
        <label className="text-[#bbb] text-sm text-scale-1100">Email</label>
        <input
          ref={emailRef}
          type="email"
          name="email"
          placeholder="you@example.com"
          className="peer/input outline-none block box-border w-full scale-100 rounded-md shadow-sm transition-all text-[#ededed] bg-[#222222] focus:shadow-md focus:ring-current focus:ring-2 focus:border-[#494949]
            focus:ring-[#313131] placeholder-[#505050] border border-[#3e3e3e] text-sm px-4 py-2 mt-2"
        />
      </div>
      <div className="relative">
        <label className="text-sm text-[#bbb]">Password</label>
        <input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="• • • • • • • •"
          className="peer/input outline-none block box-border w-full scale-100 rounded-md shadow-sm transition-all text-[#ededed] bg-[#222222] focus:shadow-md focus:ring-current focus:ring-2 focus:border-[#494949]
            focus:ring-[#313131] placeholder-[#505050] border border-[#3e3e3e] text-sm px-4 py-2 mt-2"
        />
      </div>
      <button
        disabled={false}
        className="relative space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border bg-[#10472f] dark:bg-[#33cc87]/70 hover:bg-[#10472f]/80 dark:hover:bg-[#33cc87] text-white border-[#33cc87] dark:border-[#33cc87] focus-visible:outline-[#10472f] shadow-sm w-full flex items-center justify-center text-base px-4 py-2 opacity-50 cursor-not-allowed pointer-events-none mt-7"
      >
        Sign In
      </button>
    </form>
  );
};

export default FormSignUp;
