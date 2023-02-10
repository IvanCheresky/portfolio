import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const commitFile = path.join(process.cwd(), "commit.txt");

  const commit = await fs.readFile(commitFile, "utf8");

  res.status(200).json({
    commit: commit,
  });
}
