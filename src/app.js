import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express app!");
});

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"));

app.use(cookieParser());

// Routes Import:

import userRouter from "./routes/user.routes.js";
import projectRouter from "./routes/project.routes.js";
import taskRouter from "./routes/task.routes.js";

// Routes Declaration:

app.use("/api/v1/users", userRouter);
app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/projects/:projectId/tasks", taskRouter);

export { app };
