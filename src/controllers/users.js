import { users } from '../db/db.js';

class UsersController {
    static async getAllUsers(req, res) {
        try {
            return res.status(200).json(users);
        } catch (e) {
            console.log(e.message);
        }
    }
}

export default UsersController;
