"use client";
import { useRouter } from "next/navigation";
import React from "react";

const FormRegister = () => {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, password } = Object.fromEntries(
      new FormData(e.currentTarget)
    );
    try {
      await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="flex flex-col w-full">
        <input
          name="name"
          type="name"
          placeholder="Enter Name"
          className="outline-none text-black bg-[#eaf0f7] rounded-[10px] w-[300px] px-4 py-3 text-xs"
          autoFocus
        />

        <input
          name="email"
          type="email"
          placeholder="Enter Email"
          className="outline-none text-black bg-[#eaf0f7] rounded-[10px] w-[300px] px-4 py-3 text-xs mt-2"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="outline-none text-black bg-[#eaf0f7] rounded-[10px] w-[300px] px-4 py-3 text-xs mt-2"
        />

        <button className="bg-[#4461F2] rounded-[10px] w-[300px] px-4 py-2 text-md mt-7">
          Register
        </button>
      </div>
    </form>
  );
};

export default FormRegister;
