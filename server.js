import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname)));

app.get("/sitemap.xml", (_, res) => {
  res.sendFile(path.join(__dirname, "sitemap.xml"));
});

app.get("/robots.txt", (_, res) => {
  res.sendFile(path.join(__dirname, "robots.txt"));
});

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

export default app;
