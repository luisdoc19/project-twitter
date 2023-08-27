"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import React from "react";

const FormSignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const supabase = createClientComponentClient();
  const userRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const handleSubmitSignIn = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setLoading(true);

    const fields = Object.fromEntries(new FormData(event.currentTarget));

    const { data, error } = await supabase.auth.signUp({
      email: fields.email.toString(),
      password: fields.password.toString(),
      options: {
        data: {
          user_name: fields.user.toString(),
        },
      },
    });
    if (!error) {
      setLoading(false);
      router.push("/");
    }
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmitSignIn}>
      <div className="relative">
        <label className="text-[#bbb] text-sm text-scale-1100">Username</label>
        <input
          ref={userRef}
          type="text"
          name="user"
          placeholder="@username"
          className="peer/input outline-none block box-border w-full rounded-md shadow-sm transition-all text-[#ededed] bg-[#222222]  focus:ring-2 focus:border-[#494949] focus:ring-[#272727] placeholder-[#505050] border border-[#3e3e3e] text-sm px-4 py-2 mt-2"
        />
      </div>
      <div className="relative">
        <label className="text-[#bbb] text-sm text-scale-1100">Email</label>
        <input
          ref={emailRef}
          type="email"
          name="email"
          placeholder="you@example.com"
          className="peer/input outline-none block box-border w-full rounded-md shadow-sm transition-all text-[#ededed] bg-[#222222]  focus:ring-2 focus:border-[#494949] focus:ring-[#272727] placeholder-[#505050] border border-[#3e3e3e] text-sm px-4 py-2 mt-2"
        />
      </div>
      <div className="relative">
        <label className="text-sm text-[#bbb]">Password</label>
        <input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="• • • • • • • •"
          className="peer/input outline-none block box-border w-full rounded-md shadow-sm transition-all text-[#ededed] bg-[#222222]  focus:ring-2 focus:border-[#494949] focus:ring-[#272727] placeholder-[#505050] border border-[#3e3e3e] text-sm px-4 py-2 mt-2"
        />
      </div>
      <div
        className={`relative justify-center cursor-pointer flex mx-auto items-center space-x-2 text-center font-regular rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 borde bg-[#33cc87] hover:bg-[#10472f]/90 text-white border border-[#33cc87] focus-visible:outline-[#10472f] text-sm text-bold shadow-sm w-full  leading-4 px-2 py-3 ${
          loading
            ? "opacity-50 cursor-not-allowed pointer-events-none bg-[#10472f]/90"
            : "opacity-100"
        }"`}
      >
        <button className="flex flex-row">
          {loading && <span className="loading w-[14px]"></span>}
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default FormSignUp;
