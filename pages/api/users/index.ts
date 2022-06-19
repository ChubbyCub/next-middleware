import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

const usersHandler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await prisma.user.findFirst({
    where: { email: "alice@prisma.io" }
  });
  if (!result) {
    return res.status(404).json("Not found");
  }
  return res.status(200).json(result);
}

export default usersHandler;