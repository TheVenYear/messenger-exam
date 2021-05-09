import { Router } from 'express';
import testController from '../controllers/test.controller';
import authenticate from '../middlewares/authenticate.middleware';

const testRouter = Router();

testRouter.post('/', authenticate, testController.messages);
testRouter.post('/upload', testController.upload);

export default testRouter;
