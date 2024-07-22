export interface Reply {
  id: string;
  author: string;
  time: string;
  message: string;
  likes: number;
  replies: Reply[];
}

export interface Comment {
  id: string;
  author: string;
  time: string;
  message: string;
  likes: number;
  replies: Reply[];
}

export interface Article {
  id: string;
  title: string;
  source: string;
  readTime: string;
  createdAt: string;
  image: string;
  message: string;
  comments: Comment[];
}

export interface Bookmark {
  id: string;
  name: string;
  url: string;
}

export interface Favorite {
  userId: string;
  articleId: number;
}

export interface Like {
  userId: string;
  commentId?: number;
  replyId?: number;
}
