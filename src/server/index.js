import restify from "restify";
import React from "react";
import ReactDOM from "react-dom/server";
import { AppRoot } from "../app/AppRoot";
import rows from "./data/rows";
import videos from "./data/videos";
import { promisify } from "util";

const sleep = promisify(setTimeout);

const server = restify.createServer();

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get("/", function (req, res, next) {
  res.write("<!doctype html>");
  res.write(
    ReactDOM.renderToString(
      <AppRoot rows={rows.slice(0, 3)} videos={videos} renderSource="server" />
    )
  );
  res.end();
  return next();
});

server.get("/data/rows", async (req, res, next) => {
  await sleep(500); //artificially induced latency
  res.json(rows);
  res.end();
  next();
});

server.get("/data/title/:id", async (req, res, next) => {
  await sleep(500); //artificially induced latency
  const title = videos[req.params.id];
  if (!title) {
    res.send(404, "404");
  } else {
    res.json(title);
    res.end();
  }
  next();
});

server.get(
  "/favicon.ico",
  restify.plugins.serveStatic({
    directory: "./static",
  })
);

server.get(
  "/build/client.js",
  restify.plugins.serveStatic({
    directory: "./build",
    file: "client.js",
  })
);

server.get(
  "/reset.css",
  restify.plugins.serveStatic({
    directory: "./static",
  })
);

server.get(
  "/images/*",
  restify.plugins.serveStatic({
    directory: "./static",
  })
);

server.listen(8081, function () {
  console.log("%s listening at %s", server.name, server.url);
});
