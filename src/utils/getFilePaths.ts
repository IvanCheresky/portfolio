import path from "path";
import { promises as fs } from "fs";

const jsonDirectory = path.join(process.cwd(), "blogPosts");

const getFilePaths = async () => {
  return (await getFileNames()).map(
    (filePath) => `${jsonDirectory}/${filePath}`
  );
};

export const getFileNames = async (removeExtension = false) => {
  const filePaths = await fs.readdir(jsonDirectory);

  if (removeExtension) {
    return filePaths.map((filePath) => filePath.replace(/\.json$/, ""));
  }

  return filePaths;
};

export default getFilePaths;
