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
  id: number;
  name: string;
  url: string;
}

export interface Like {
  userId: string;
  articleId?: number;
}
