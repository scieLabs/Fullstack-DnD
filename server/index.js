import express from "express";
import { config } from "dotenv";
import corse from "cors";
import postsRoutes from "./routes/postsRoutes.js";

config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(corse({ origin: "*" }));

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.use("/posts", postsRoutes)

app.listen(PORT, () => {
  console.log(`✅ Server is running at ${PORT}`);
});
