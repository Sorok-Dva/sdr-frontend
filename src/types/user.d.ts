export interface User {
  id: number;
  nickname: string;
  email: string;
  roleId: string;
  dreamsCount: number;
  points: number;
  level: number;
  title: string;
  validated: boolean;
  createdAt: Date;
}

export interface UserProfile extends User {
  avatar: string;
  isAdmin: boolean;
  totalDreams: number;
  publicDreams: number;
  totalViews: number;
}
