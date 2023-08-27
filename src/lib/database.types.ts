export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      like: {
        Row: {
          created_at: string
          id: string
          posts_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          posts_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          posts_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "like_posts_id_fkey"
            columns: ["posts_id"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "like_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      posts: {
        Row: {
          created_at: string
          id: string
          liked_people: string[] | null
          likes: string[] | null
          text: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          liked_people?: string[] | null
          likes?: string[] | null
          text: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          liked_people?: string[] | null
          likes?: string[] | null
          text?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "posts_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string
          id: string
          liked: string[] | null
          name: string | null
          posts_id: string[] | null
          user_name: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          id: string
          liked?: string[] | null
          name?: string | null
          posts_id?: string[] | null
          user_name?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          id?: string
          liked?: string[] | null
          name?: string | null
          posts_id?: string[] | null
          user_name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      add: {
        Args: {
          user_id: string
          post_id: string
        }
        Returns: undefined
      }
      dislike: {
        Args: {
          post_id: string
          user_id: string
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
