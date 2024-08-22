export type Tutorial = {
  id: number;
  userId: number;
  categoryId: string;
  title: string;
  image?: string;
  content: string;
  views: number;
  upvote: number;
  slug: string;
  createdAt: Date;
  commentCount: number;
  validated: boolean;
  user?: {
    nickname: string;
    avatar: string;
  }
};
