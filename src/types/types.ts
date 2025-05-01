export interface User {
  email: string;
  role: 'user' | 'admin';
}

export interface Post {
  _id: string;
  title: string;
  content: string;
  author: string;
  timestamp: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface SignupData {
  email: string;
  password: string;
  role: 'user' | 'admin';
}