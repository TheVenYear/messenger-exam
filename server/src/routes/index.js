import { Router } from "express";
import authRouter from "./auth.route";
import messagesRoute from "./messages.route";

const routes = Router();

const routers = [
  {
    path: "/auth",
    router: authRouter,
  },
  {
    path: "/messages",
    router: messagesRoute,
  },
];

routers.forEach((router) => {
  routes.use(router.path, router.router);
});

export default routes;
