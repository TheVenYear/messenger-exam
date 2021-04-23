import { Router } from 'express';
import testController from '../controllers/test.controller';

const testRouter = Router();

testRouter.post('/', testController.messages);

export default testRouter;
