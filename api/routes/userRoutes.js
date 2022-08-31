const { Router } = require("express");
const UserController = require("../controllers/UserController");

const router = Router();

router
	.get("/user/:user_id/workspace", UserController.getAllWorkspaces)
	.get("/user/:user_id/workspace/:workspace_id", UserController.getWorkspace)
	.post("/register", UserController.createUser)
	.post("/user/:user_id/workspace", UserController.createWorkspace)
	.post("/login", UserController.loginUser)
	.put("/user/:user_id/workspace/:workspace_id", UserController.updateWorkspace)
	.delete("/user/:user_id/workspace/:workspace_id", UserController.deleteWorkspace);

module.exports = router;