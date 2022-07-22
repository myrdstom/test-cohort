import { questions } from '../db/db.js';

class QuestionsController {
    static async getAllQuestions(req, res) {
        try {
            return res.status(200).json(questions);
        } catch (e) {
            console.log(e.message);
        }
    }
}

export default QuestionsController;
