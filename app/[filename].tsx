import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { filename },
  } = req;

  const filePath = path.join(
    process.cwd(),
    "public",
    "resume",
    `${filename}.pdf`
  );
  const file = fs.createReadStream(filePath);
  res.setHeader("Content-Type", "application/pdf");
  file.pipe(res);
}
