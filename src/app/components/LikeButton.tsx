"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const LikeButton = ({
  post,
  addOptimisticPost,
}: {
  post: PostWithAuthor;
  addOptimisticPost: (newTweet: PostWithAuthor) => void;
}) => {
  const handleLikeTweet = async () => {
    const supabase = createClientComponentClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      if (post.user_liked) {
        addOptimisticPost({
          ...post,
          post_like_length: post.post_like_length - 1,
          user_liked: !post.user_liked,
        });

        await supabase
          .from("like")
          .delete()
          .match({ user_id: user.id, posts_id: post.id });
      } else {
        addOptimisticPost({
          ...post,
          post_like_length: post.post_like_length + 1,
          user_liked: !post.user_liked,
        });
        await supabase
          .from("like")
          .insert({ user_id: user.id, posts_id: post.id });
      }
    }
  };

  return (
    <div className="flex items-center mr-6">
      <div
        className="p-2 hover:bg-red-600/10 rounded-full cursor-pointer"
        onClick={handleLikeTweet}
      >
        {post.user_liked ? (
          <svg
            className="icon icon-tabler icon-tabler-heart-filled text-red-700 hover:text-red-[700] cursor-pointer w-[18px] h-[18px]"
            viewBox="0 0 24 24"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z"
              fill="currentColor"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-heart cursor-pointer"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
          </svg>
        )}
      </div>
      <span className="ml-1 text-sm">{post.post_like_length}</span>
    </div>
  );
};

export default LikeButton;
