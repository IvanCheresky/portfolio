import Metadata from "./metadata";

export default interface Post {
  metadata: Metadata;
  content: string;
}
