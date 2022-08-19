import { Router } from 'express';
import QuestionsController from '../../controllers/questions.js';

const router = Router();

router.get('/', QuestionsController.getAllQuestions);

router.get('/', QuestionsController.getAnswer)

export default router;
