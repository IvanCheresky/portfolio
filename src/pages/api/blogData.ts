import { promises as fs } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import getFilePaths from "@/utils/getFilePaths";

// currently unused
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const filePaths = await getFilePaths();

  const filesContentsPromises = filePaths.map((filePath) =>
    fs.readFile(filePath, "utf8")
  );

  const filesContents = (await Promise.all(filesContentsPromises))
    .map((file) => JSON.parse(file))
    .sort((a, b) => (a.createdAt < b.createdAt ? -1 : 1));

  res.status(200).json(filesContents);
}
