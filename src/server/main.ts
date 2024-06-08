import express from "express";
import ViteExpress from "vite-express";

const app = express();

app.get("/api/hello", (_, res) => {
  res.status(200).json({success: true, message: "API is working!"});
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
