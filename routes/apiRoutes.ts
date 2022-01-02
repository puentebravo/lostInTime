import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const router = require("express").Router();

const prisma = new PrismaClient();

router.get("/api/getPosts", (req: Request, res: Response) => {
  prisma.posts.findMany().then((allPosts) => {
    res.json(allPosts);
  });
});


router.get("/api/getPosts/:tag", (req: Request, res: Response) => {
  prisma.posts.findMany({
    where: {
      tags: {
        equals: req.params.tag
      }
    }
  })
})
