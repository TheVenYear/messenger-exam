import { Router } from "express";
import messagesController from "../controllers/messages.controller";
import authenticate from "../middlewares/authenticate.middleware";

const messagesRouter = Router();

messagesRouter.post("/", authenticate, messagesController.messages);

export default messagesRouter;
