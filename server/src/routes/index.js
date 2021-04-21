import { Router } from 'express';
import authRouter from './auth.route';
import testRouter from './test.route';

const routes = Router();

const routers = [
  {
    path: '/auth',
    router: authRouter,
  },
  {
    path: '/test',
    router: testRouter,
  },
];

routers.forEach((router) => {
  routes.use(router.path, router.router);
});

export default routes;
