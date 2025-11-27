import { readFileSync } from "fs";
import { join } from "path";

export default function handler(req, res) {
  const xml = readFileSync(join(process.cwd(), "public", "sitemap.xml"), "utf8");
  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(xml);
}
