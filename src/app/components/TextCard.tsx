"use client";
import React from "react";
import LikeButton from "./LikeButton";
import Link from "next/link";
import TooltipUser from "./TooltipUser";
import { experimental_useOptimistic as useOptimistic } from "react";
import { Session } from "@supabase/supabase-js";

const TextCard = ({
  posts,
  session,
}: {
  posts: PostWithAuthor[];
  session: Session;
}) => {
  const [optimisticTweets, addOptimisticTweet] = useOptimistic<
    PostWithAuthor[],
    PostWithAuthor
  >(posts, (currentTweet, newTweet) => {
    const newOptimisticTweet = [...currentTweet];
    const index = newOptimisticTweet.findIndex(
      (post) => post.id === newTweet.id
    );
    newOptimisticTweet[index] = newTweet;
    return newOptimisticTweet;
  });

  function getTimeAgoSinceCreated(created_at: string) {
    const currentTime = new Date();
    const createdAtDate = new Date(created_at);

    const timeDifference = currentTime.getTime() - createdAtDate.getTime();

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      const createdAtDay = createdAtDate.getDate();
      const createdAtMonth = createdAtDate.toLocaleString("default", {
        month: "short",
      });
      return `${createdAtDay} ${createdAtMonth}`;
    } else if (hours > 0) {
      return `${hours}h`;
    } else if (minutes > 0) {
      return `${minutes}m`;
    } else {
      return `${seconds}s`;
    }
  }
  return optimisticTweets.map((post) => (
    <div
      className="border border-[#2e2e2e] p-4  max-w-[600px] mx-auto"
      key={post.id}
    >
      <div className="flex justify-between w-max  ">
        <div className="flex gap-2">
          <div>
            <div className=" flex flex-row gap-1 items-start">
              <TooltipUser post={post} session={session} />
              <span className="text-white font-bold block text-md cursor-pointer">
                <Link href={`/${post?.users.user_name}`}>
                  {post?.users.name}
                </Link>
              </span>
              <span className="text-gray-400 font-light block text-sm mt-[1.5px]">
                <Link href={`/${post?.users.user_name}`}>
                  @{post?.users.user_name}
                </Link>
              </span>
              <span
                className="text-gray-400 font-light block text-sm mt-[1.5px]"
                suppressHydrationWarning
              >
                · {getTimeAgoSinceCreated(post.created_at)}
              </span>
            </div>
            <div>
              <p className="text-[#e7e9ea] text-sm block  leading-snug ">
                {post?.text}
              </p>
              {post.image && (
                <div className="flex mx-auto h-auto w-[570px] py-4">
                  <img
                    src={post?.image}
                    alt=""
                    className="rounded object-cover w-full h-full"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="text-gray-400 mx-auto flex flex-row justify-center">
        <div className="flex items-center mr-6">
          <svg
            viewBox="0 0 24 24"
            className="r-1re7ezh r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr fill-current h-5 w-auto"
          >
            <g>
              <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
            </g>
          </svg>
          <span className="ml-3">2</span>
        </div>
        <LikeButton post={post} addOptimisticPost={addOptimisticTweet} />
      </div>
    </div>
  ));
};

export default TextCard;
