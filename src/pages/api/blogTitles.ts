import { NextApiRequest, NextApiResponse } from "next";
import { getFileNames } from "@/utils/getFilePaths";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const fileNames = await getFileNames(true);

  res.status(200).json(fileNames);
}
