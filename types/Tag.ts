import { Article } from "./Article";

export type Tag = {
  name: string;
  articles?: Article[];
};
