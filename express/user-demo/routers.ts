import { port } from "./index";

const express = require('express')
const router = express.Router();
import * as UserController from "./controllers/UserController";

router.get("/", UserController.getUserByPropertyController);

router.post("/", UserController.createUserController);

router.get("/:id", UserController.getUserByIdController);

router.delete("/:id", UserController.deleteUserController);

router.put("/:id", UserController.updateUserController);

router.patch("/:id", UserController.updateSinglePropertyController);

module.exports = router;
export const localHost = `http://localhost:${port};`;
