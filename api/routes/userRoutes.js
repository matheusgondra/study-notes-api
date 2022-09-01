const { Router } = require("express");
const UserController = require("../controllers/UserController");
const authMiddleware = require("../middlewares/auth");

const router = Router();

router
	.get("/user/:user_id/workspace", authMiddleware, UserController.getAllWorkspaces)
	.get("/user/:user_id/workspace/:workspace_id", authMiddleware, UserController.getWorkspace)
	.post("/register", UserController.createUser)
	.post("/user/:user_id/workspace", authMiddleware, UserController.createWorkspace)
	.post("/login", UserController.loginUser)
	.put("/user/:user_id/workspace/:workspace_id", authMiddleware, UserController.updateWorkspace)
	.delete("/user/:user_id/workspace/:workspace_id", authMiddleware, UserController.deleteWorkspace);

module.exports = router;