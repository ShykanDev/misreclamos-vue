import type { Timestamp } from "firebase/firestore";

export interface IAnswer {
  userNameTo: string;
  answer: string;
  date: Timestamp;
  userNameFrom: string;
}

export interface IComplaint {
  createdAt: Timestamp;
  title: string;
  category: string;
  service: string;
  id: string;
  content: string;
  answers?: IAnswer[];
  image?: string;
  userName: string;
  userUID: string;
}
