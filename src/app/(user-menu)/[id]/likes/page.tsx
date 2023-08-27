import React from "react";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import TextCard from "@/app/components/LikePosts";

export const dynamic = "force-dynamic";

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

  const { data: likedPosts } = await supabase
    .from("like")
    .select("*, posts(*, users(*))")
    .eq("user_id", userInfo && userInfo[0].id)
    .order("created_at", { ascending: false });

  const posts =
    likedPosts?.map((post) => ({
      ...post,
      text: post.posts?.text || "",
      created_at: post.posts?.created_at,
      user_id: post.posts?.user_id,
      users: post.posts?.users,
      post_like_length: post?.posts?.likes?.length || 0,
      user_liked:
        (post.posts?.liked_people &&
          post.posts.liked_people.includes(session.user.id)) ||
        false,
    })) ?? [];

  return <div>{<TextCard posts={posts} session={session} />}</div>;
};

export default page;
