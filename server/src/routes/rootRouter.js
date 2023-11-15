import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import decksRouter from "./api/v1/decksRouter.js";
import newCardsRouter from "./api/v1/newCardsRouter.js";
import statsRouter from "./api/v1/statsRouter.js";

const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);
rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use("/api/v1/decks", decksRouter);
rootRouter.use("/api/v1/newCards", newCardsRouter);
rootRouter.use("/api/v1/stats", statsRouter);

//place your server-side routes here

export default rootRouter;
