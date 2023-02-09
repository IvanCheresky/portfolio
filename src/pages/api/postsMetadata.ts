import { NextApiRequest, NextApiResponse } from "next";
import { getFilesMetadata } from "@/utils/getFilePaths";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const metadatas = await getFilesMetadata();

  const sortedMetadata = metadatas.sort((a, b) =>
    a.createdAt < b.createdAt ? -1 : 1
  );

  res.status(200).json(sortedMetadata);
}
