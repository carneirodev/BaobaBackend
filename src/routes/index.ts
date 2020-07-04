import { Router } from 'express';
import homeworkRouter from './homework.routes';
import userRouter from './user.routes';
import sessionsRouter from './sessions.routes';
import roomsRouter from './rooms.routes';
import studentHomeworkRouter from './studentHomework.routes';

import authMiddleware from '../middlewares/ensureAuthenticated';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/sessions', sessionsRouter);
// Somente tera se autenticado
routes.use(authMiddleware);

routes.use('/homework', homeworkRouter);
routes.use('/rooms', roomsRouter);
routes.use('/student', studentHomeworkRouter);

export default routes;
