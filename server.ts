import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";


const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const prisma = new PrismaClient();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/public"));
}

app.get("/api/getPosts", async (req: Request, res: Response) => {
  const posts = await prisma.posts.findMany();

  res.json(posts);
  console.log("Route reached.")
});

app.get("/api/getPosts/:tag", async (req: Request, res: Response) => {
  const taggedPosts = await prisma.posts.findMany({
    where: {
      tags: {
        equals: req.params.tag,
      },
    },
  });
  
  res.json(taggedPosts);
  console.log(`Route reached with ${req.params.tag}`)
});

app.get("/api/getPosts/allTags", async (req: Request, res: Response) => {
  const allTags = await prisma.posts.findMany({
    select: {
      ID: true,
      tags: true
    }
  })

  res.json(allTags);
  console.log("Route Reached: all tags.")
})

app.get("*", function (req: Request, res: Response) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server now listening on ${PORT}. Check localhost.`, PORT);
});
