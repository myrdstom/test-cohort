import { Router } from 'express';

import questionsRoute from './questions.route.js';
import usersRoute from './users.route.js';

const routes = Router();

routes.use('/questions', questionsRoute);
routes.use('/users', usersRoute);

export default routes;
