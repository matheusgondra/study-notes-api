const database = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

    static async loginUser(req, res) {
        const { username, password } = req.body;
        try {
            const user = await database.User.findOne({ where: { username: username }});

            if(!user) {
                return res.status(404).json({ error: "Usuário não encontrado" });
            }
            if(!await bcrypt.compare(password, user.password)) {
                return res.status(404).json({ error: "Usuário invalido"});
            }

            const token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: 86400 });

            return res.status(200).json({ auth: true, token: token });

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = UserController;