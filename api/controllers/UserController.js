const database = require("../models");

class UserController {
    static async createUser(req, res) {
        const newUser = req.body;
        try {
            const createdUser = await database.User.create(newUser);
            createdUser.password = undefined;
            return res.status(201).json(createdUser);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = UserController;