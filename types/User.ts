import { Article } from "./Article";

export type User = {
  fullName: string;
  username: string;
  email: string;
  articles?: Article[];
};
