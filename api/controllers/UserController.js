const database = require("../models");
const bcrypt = require("bcrypt");

class UserController {
    static async createUser(req, res) {
        const newUser = req.body;
        try {
            newUser.password = await bcrypt.hash(newUser.password, 12);
            const createdUser = await database.User.create(newUser);
            createdUser.password = undefined;
            return res.status(201).json(createdUser);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = UserController;