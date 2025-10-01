import type { Timestamp } from "firebase/firestore";

export interface IComplaint {
  createdAt: Timestamp;
  title: string;
  category: string;
  service: string;
  id: string;
  content: string;
  image?: string;
  userName: string;
  userUID: string;
}
