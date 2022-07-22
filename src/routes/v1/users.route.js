import { Router } from 'express';
import UsersController from '../../controllers/users.js';

const router = Router();

router.get('/', UsersController.getAllUsers);

export default router;
