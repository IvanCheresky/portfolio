import path from "path";
import recursive from "recursive-readdir";
import { promises as fs } from "fs";

const jsonDirectory = path.join(process.cwd(), "blogPosts");

export const getFilesMetadata = async () => {
  const metadataPaths = await recursive(jsonDirectory, ["content.json"]);

  const metadataPromises = metadataPaths.map((filePath) =>
    fs.readFile(filePath, "utf8")
  );

  const metadatas = await Promise.all(metadataPromises);

  return metadatas.map((metadata) => JSON.parse(metadata));
};
