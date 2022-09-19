import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";


const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes/apiRoutes")


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/public"));
}


app.get("*", function (req: Request, res: Response) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server now listening on ${PORT}. Check localhost.`);
});
