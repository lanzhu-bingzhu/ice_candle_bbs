export interface User {
  user_id: number
  username: string
  email: string
  password_hash?: string
  nickname: string
  avatar: string
  bio: string
  role: 'user' | 'moderator' | 'admin'
  status: number
  created_at: string
  updated_at: string
}

export interface Board {
  board_id: number
  name: string
  description: string
  sort: number
  status: number
  created_at: string
  updated_at: string
}

export interface Post {
  post_id: number
  board_id: number
  user_id: number
  title: string
  content: string
  view_count: number
  status: number
  created_at: string
  updated_at: string
}

export interface Comment {
  comment_id: number
  post_id: number
  user_id: number
  content: string
  status: number
  created_at: string
  updated_at: string
}

export interface SystemConfig {
  config_id: number
  key: string
  value: string
  description: string
  updated_at: string
}