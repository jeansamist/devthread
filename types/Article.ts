import { Tag } from "./Tag";
import { TimeModel } from "./TimeModel";
import { User } from "./User";

export type Article = {
  cover?: string;
  title: string;
  content: string;
  description: string;
  author: User;
  tags: Tag[];
} & TimeModel;
