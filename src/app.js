import express from "express";
import {
  getAllProject,
  getWebProjects,
} from "./controllers/project-controller.js";
import bodyParser from "body-parser";
import cors from "cors";
import connect from "./database/mongo.js";
import dotenv from "dotenv";
dotenv.config();
connect();

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/images", express.static("./public/images"));
app.get("/", (req, res) => {
  return res.status(200).json({ message: "app works!" });
});

app.get("/api/projects", getAllProject);
app.get("/api/projects/web", getWebProjects);

app.listen(process.env.PORT || 3000);
