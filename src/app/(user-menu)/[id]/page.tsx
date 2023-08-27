import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import TextCard from "@/app/components/TextCard";

const page = async ({ params }: { params: { id: string } }) => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) redirect("/dashboard/sign-in");

  const { data: user } = await supabase
    .from("users")
    .select("*")
    .eq("user_name", params.id);

  const userInfo = user;
  if (userInfo?.length === 0) return redirect("/not-found");

  const { data } = await supabase
    .from("posts")
    .select("*, users(*), like(*)")
    .eq("user_id", userInfo && userInfo[0].id)
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
    <main>
      <TextCard posts={posts} session={session} />
    </main>
  );
};

export default page;
