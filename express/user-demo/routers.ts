import { port } from "./index";

const express = require('express')
const router = express.Router();
import * as UserController from "./controllers/UsersController";
import { userValidation } from "./validation";

router.get("/", UserController.getUserByDetail);

router.post("/", userValidation, UserController.create);

router.get("/:id", UserController.getAll);

router.delete("/:id", UserController.remove);

router.put("/:id", userValidation, UserController.updateUsers);

router.patch("/:id", userValidation, UserController.updateDetail);

module.exports = router;
export const localHost = `http://localhost:${port};`;
