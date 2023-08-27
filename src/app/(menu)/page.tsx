import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import TextCard from "../components/TextCard";
import { revalidatePath } from "next/cache";
import FormFullName from "../components/FormFullName";
import FormTweet from "../components/FormTweet";

const HomePage = async ({
  searchParams,
}: {
  searchParams: { full_name?: string; user_name?: string };
}) => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session === null) redirect("/dashboard/sign-in");

  const { data: user } = await supabase
    .from("users")
    .select("*")
    .eq("id", session.user.id);

  if (user && !user[0].name && !searchParams.full_name)
    redirect("?full_name=empty");

  if (user && !user[0].user_name && !searchParams.user_name)
    redirect("?user_name=empty");

  const { data } = await supabase
    .from("posts")
    .select("*, users(*), like(*)")
    .order("created_at", { ascending: false });

  const posts: PostWithAuthor[] =
    data?.map((post) => ({
      ...post,
      post_like_length: post?.likes?.length || 0,
      user_liked:
        post.like
          .map((like) => like.user_id === session.user.id)
          .includes(true) || false,
      users: Array.isArray(post.users) ? post.users[0] : post.users,
    })) ?? [];

  return (
    <>
      <FormTweet user={session.user.id} />
      <div className="w-full mx-auto">
        <TextCard posts={posts} session={session} />
      </div>

      {searchParams.full_name === "empty" && user && !user[0].name && (
        <div className=" z-40 fixed bg-[#161616]/75 h-full w-full left-0 top-0 data-closed:animate-fade-out-overlay-bg data-open:animate-fade-in-overlay-bg grid place-items-center ">
          <div className=" relative bg-[#1c1c1c]  my-4 border border-[#2e2e2e] rounded-md shadow-xl opacity-100 data-open:animate-overlay-show data-closed:animate-overlay-hide  sm:align-middle sm:w-full sm:max-w-sm">
            <div className="bg-[#282828] w-[100%] p-4">
              <h1 className="text-[#ededed] text-md">
                Por favor, añade tu{" "}
                {searchParams.full_name === "empty"
                  ? "nombre completo"
                  : "username"}
              </h1>
            </div>
            <div className="p-4">
              <p className="text-[#707070] text-sm">
                Añade un nombre con el cual las personas en la red social te
                puedan identificarte. Además, ayudaras a la mejor legibilidad
                del codigo
              </p>
            </div>
            <FormFullName
              text={
                searchParams.full_name === "empty" ? "Full Name" : "Username"
              }
            />
          </div>
        </div>
      )}
      {searchParams.user_name === "empty" && user && !user[0].user_name && (
        <div className=" z-40 fixed bg-[#161616]/75 h-full w-full left-0 top-0 data-closed:animate-fade-out-overlay-bg data-open:animate-fade-in-overlay-bg grid place-items-center ">
          <div className=" relative bg-[#1c1c1c]  my-4 border border-[#2e2e2e] rounded-md shadow-xl opacity-100 data-open:animate-overlay-show data-closed:animate-overlay-hide  sm:align-middle sm:w-full sm:max-w-sm">
            <div className="bg-[#282828] w-[100%] p-4">
              <h1 className="text-[#ededed] text-md">
                Por favor, añade tu{" "}
                {searchParams.full_name === "empty"
                  ? "nombre completo"
                  : "username"}
              </h1>
            </div>
            <div className="p-4">
              <p className="text-[#707070] text-sm">
                Añade un nombre con el cual las personas en la red social te
                puedan identificarte. Además, ayudaras a la mejor legibilidad
                del codigo
              </p>
            </div>
            <FormFullName
              text={
                searchParams.full_name === "empty" ? "Full Name" : "Username"
              }
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
