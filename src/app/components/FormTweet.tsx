"use client";
import React, { useRef, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";

const FormTweet = ({ user }: { user: string }) => {
  const router = useRouter();
  const [file, setFile] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const inputRefFile = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const supabase = createClientComponentClient();

    if (inputRef.current === null) return;
    if (!form.get("text") || inputRef.current?.value.length < 3) return;

    setLoading(true);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        if (!reader.result) return;
        const base64data = reader.result;
        const { data } = await axios.post("/api/upload", { base64data });
        await supabase.from("posts").insert({
          text: form.get("text"),
          image: data.link,
          user_id: user,
        });
        toast.success("Se ha añadido tu comentario");
        setLoading(false);
        router.refresh();
        setFile(null);
      };
    } else {
      await supabase.from("posts").insert({
        text: form.get("text"),
        user_id: user,
      });
      toast.success("Se ha añadido tu comentario");
      setLoading(false);
      router.refresh();
      setFile(null);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex mx-auto">
      <Toaster position="top-right" closeButton richColors theme="dark" />
      <div>
        <div className="peer/input outline-none block box-border scale-100 shadow-sm transition-all text-[#ededed] bg-[#222222] focus:shadow-md focus:ring-current focus:ring-2 focus:border-[#373737] focus:ring-[#292929] placeholder-[#505050] border  border-[#2e2e2e] w-[600px] mx-auto text-sm resize-none p-4">
          <textarea
            ref={inputRef}
            name="text"
            placeholder="¡¿Qué esta pasando?!"
            className=" outline-none transition-all w-full text-[#ededed] bg-[#222222]  text-md resize-none pb-8 "
          />
          <div className="py-2">
            {file && (
              <img
                src={URL.createObjectURL(file)}
                alt=""
                className="rounded object-contain max-h-[500px] mx-auto"
              />
            )}
          </div>
          <div className="flex flex-row justify-between">
            <div>
              <svg
                onClick={() => inputRefFile.current?.click()}
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-photo text-sky-600 cursor-pointer hover:text-sky-500 transition-all"
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
                <path d="M15 8h.01"></path>
                <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"></path>
                <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"></path>
                <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"></path>
              </svg>

              <input
                ref={inputRefFile}
                type="file"
                name="file"
                accept=".jpg,.png,.webp"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files === null) return;
                  const file = e.target.files[0];
                  setFile(file);
                }}
              />
            </div>
            <div className="flex justify-end">
              <button
                className={`relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border bg-[#33cc87] hover:bg-[#10472f]/90  text-white border-[#33cc87]  focus-visible:outline-[#10472f] shadow-sm  text-sm leading-4 px-3 py-2 ${
                  loading
                    ? "opacity-50 cursor-not-allowed pointer-events-none"
                    : "opacity-100"
                }"}`}
              >
                {loading && <span className="loading"></span>}
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormTweet;
