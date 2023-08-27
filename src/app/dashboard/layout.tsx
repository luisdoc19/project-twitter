import React from "react";
import NavBar from "../components/NavBar";
import Link from "next/link";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <body>
      <NavBar />
      <div className="h-screen flex flex-col">
        <div className="flex flex-col flex-1 bg-[#161616]">
          <div className="flex flex-1">
            <main className="flex flex-col items-center flex-1 flex-shrink-0 px-5 pt-16 pb-8 border-r shadow-lg bg-[#1c1c1c] border-[#2e2e2e]">
              <div className="flex-1 flex flex-col justify-center w-[330px] sm:w-[384px]">
                {children}
              </div>
              <div className="sm:text-center">
                <p className="text-xs text-[#707070] sm:mx-auto sm:max-w-sm">
                  By continuing, you agree to Supabase&apos;s Termsof services
                  and Privacy Policy, and to receive periodic emails with
                  updates
                </p>
              </div>
            </main>
            <aside className="flex-col items-center justify-center flex-1 flex-shrink hidden basis-1/4 xl:flex">
              <div className="relative flex flex-col gap-6">
                <div className="absolute select-none -top-12 -left-11">
                  <span className="text-[160px] leading-none text-[#343434]">
                    “
                  </span>
                </div>
                <blockquote className="z-10 max-w-lg text-3xl text-[#ededed]">
                  Working on my next SaaS app and I want this to be my whole job
                  because I&apos;m just straight out vibing putting it together.
                  @supabase and chill, if you will
                </blockquote>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </body>
  );
}
