import express from "express";
import next from "next";
import { createServer } from "http";
import { parse } from "url";
import { swaggerUi, swaggerSpec } from "./src/swagger.mjs";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  server.all("*", (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  createServer(server).listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
