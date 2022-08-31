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

	 static async getAllWorkspaces(req, res) {
		const { user_id } = req.params;
		try {
			const workspaces = await database.Workspace.findAll({
				where: {
					user_id: user_id
				}
			});
			return res.status(200).json(workspaces);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	 }

	 static async getWorkspace(req, res) {
		const { user_id, workspace_id } = req.params;
		try {
			const workspaces = await database.Workspace.findOne({
				where: {
					id: workspace_id,
					user_id: user_id
				}
			});
			return res.status(200).json(workspaces);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	 }

	 static async createWorkspace(req, res) {
		const { user_id } = req.params;
		const newWorkspace = { ...req.body, user_id: user_id };
		try {
			const createdWorkspace = await database.Workspace.create(newWorkspace);
			return res.status(200).json(createdWorkspace);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	 }

	 static async updateWorkspace(req, res) {
		const { user_id, workspace_id } = req.params;
		const updatedData = req.body;
		try {
			await database.Workspace.update(updatedData, {
				where: {
					id: workspace_id,
					user_id: user_id
				}
			});
			const updatedWorkspace = await database.Workspace.findOne({
				where: {
					id: workspace_id,
					user_id: user_id
				}
			});
			return res.status(200).json(updatedWorkspace);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	 }

	 static async deleteWorkspace(req, res) {
		const { user_id, workspace_id } = req.params;
		try {
			await database.Workspace.destroy({
				where: {
					id: workspace_id,
					user_id: user_id
				}
			});
			return res.status(200).json({ message: `Registro de id ${workspace_id} deletado`});
		} catch (error) {
			return res.status(500).json(error.message);
		}
	 }
}

module.exports = UserController;