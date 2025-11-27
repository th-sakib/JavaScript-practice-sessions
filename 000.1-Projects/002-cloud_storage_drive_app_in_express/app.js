import express from "express";
import fs from "node:fs/promises";
import { log } from "node:console";

const app = express();
const port = 4000;
app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", async (req, res) => {
  const url = req.url;

  const directoryContent = await fs.readdir(`./storage/${url}`);
  res.status(200).json({ directoryContent });
});

app.listen(port, () => {
  console.log(`server is running at port: ${port}`);
});
