import { Database as DB } from "./src/lib/database.types";

export type Post = DB["public"]["Tables"]["posts"]["Row"];
export type Users = DB["public"]["Tables"]["users"]["Row"];
export type Like = DB["public"]["Tables"]["like"]["Row"];

declare global {
  type Database = DB;
  type PostWithAuthor = Post & {
    posts_id?: string;
    posts?: Post;
    users: Users;
    post_like_length: number;
    user_liked: boolean;
    image?: string;
  };
  type LikedPosts = {
    id: string;
    created_at: string | undefined;
    user_id: string | undefined;
    posts_id: string;
    text: string;
    users: any;
    post_like_length: number;
    user_liked: boolean;
    posts: {
      created_at: string;
      id: string;
      likes: string[] | null;
      liked_people: string[] | null;
      text: string;
      user_id: string;
      users: any;
    } | null;
  };

  type UserWithPosts = {
    avatar_url: string | null;
    bio: string | null;
    created_at: string;
    id: string;
    liked: string[] | null;
    name: string | null;
    posts_id: string[] | null;
    user_name: string | null;
    posts: Posts[];
  };

  type PostWithAuthorAndLike = Like & {
    posts_id?: string;
    users: Users;
    posts: Post;
    text: string;
    post_like_length: number;
    user_liked: boolean;
  };
}
