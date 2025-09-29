export interface IComplaint {
  createdAt: string;
  title: string;
  category: string;
  service: string;
  id: string;
  description: string;
  image?: string;
  userName: string;
  userUID: string;
}
