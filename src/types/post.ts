import { Descendant } from "slate";

export default interface Post {
  date: string;
  title: string;
  content: Descendant[];
}
