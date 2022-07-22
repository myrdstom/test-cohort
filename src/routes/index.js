import { Router } from 'express';
import routes from './api/index.js';

const router = Router();

router.use('/api/v1', routes);

export default router;
