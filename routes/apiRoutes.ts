import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const router = require("express").Router();

const prisma = new PrismaClient({log: ['query', 'error']});

router.get("/api/getPosts", async (req: Request, res: Response) => {
  const posts = await prisma.posts.findMany();

  res.json(posts);
  console.log("Route reached.");
});

router.get("/api/getPosts/:tag", async (req: Request, res: Response) => {
  const taggedPosts = await prisma.posts.findMany({
    where: {
      tags: {
        equals: req.params.tag,
      },
    },
  });

  res.json(taggedPosts);
  console.log(`Route reached with ${req.params.tag}`);
});

router.get("/api/getPosts/allTags", async (req: Request, res: Response) => {
  const allTags = await prisma.posts.findMany({
    select: {
      ID: true,
      tags: true,
    },
  });

  res.json(allTags);
  console.log("Route Reached: all tags.");
});

router.post("/api/savePost", async (req: Request, res: Response) => {
  const newPost = await prisma.posts.create({
    data: {
      title: req.body.title,
      content: req.body.content,
      tags: req.body.tags,
    },
  });
  console.log("route reached: post")
  res.json(newPost);
});



module.exports = router;
