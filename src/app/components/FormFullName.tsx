"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import React from "react";
import { Toaster, toast } from "sonner";

const FormFullName = ({ text }: { text: string }) => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const handleSubmitFullName = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const fields = Object.fromEntries(new FormData(e.currentTarget));
    const supabase = createClientComponentClient();

    if (text === "Full Name") {
      const { error } = await supabase.auth.updateUser({
        data: {
          name: fields.data.toString(),
        },
      });

      if (!error) {
        toast.success("Full Name Updated");
        const session = await supabase.auth.getUser();

        const { data, error } = await supabase
          .from("users")
          .update({ name: fields.data.toString() })
          .eq("id", session.data.user?.id);

        if (!error) {
          router.push("/");
        }

        setLoading(false);
      }
    } else {
      const { error } = await supabase.auth.updateUser({
        data: {
          user_name: fields.data.toString(),
        },
      });

      if (!error) {
        toast.success("Username Updated");
        const session = await supabase.auth.getUser();

        const { data, error } = await supabase
          .from("users")
          .update({ user_name: fields.data.toString() })
          .eq("id", session.data.user?.id);

        if (!error) {
          router.push("/");
        }

        setLoading(false);
      }
    }
  };
  return (
    <>
      <Toaster richColors position="top-right" />
      <form onSubmit={handleSubmitFullName}>
        <div className="px-4 pb-4">
          <label className="text-[#bbb] text-sm text-scale-1100">{text}</label>
          <input
            type="text"
            name="data"
            placeholder={text}
            className="peer/input  block box-border w-full rounded-md shadow-sm transition-all text-[#ededed] focus:shadow-md outline-none focus:ring-current focus:ring-2 focus:border-[#707070] focus:ring-[#282828] placeholder-[#505050]  bg-[#222222] border border-[#3e3e3e]  text-sm px-4 py-2"
          />
        </div>
        <div className="flex w-full justify-end bg-[#282828] border-t border-[#2e2e2e] px-3 py-4">
          <button
            className={`relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border bg-[#33cc87] hover:bg-[#10472f]/90  text-white border-[#33cc87]  focus-visible:outline-[#10472f] shadow-sm  text-sm leading-4 px-3 py-2 ${
              loading
                ? "opacity-50 cursor-not-allowed pointer-events-none bg-[#10472f]/90"
                : "opacity-100"
            }"`}
          >
            {loading && <span className="loading"></span>}
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default FormFullName;
