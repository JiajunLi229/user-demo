"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.localHost = void 0;
const _1 = require("./");
const express = require("express");
const router = express.Router();
const UserController = __importStar(require("./controllers/UsersController"));
const validation_1 = require("./validation/validation");
router.get("/", UserController.getUserByDetail);
router.post("/", validation_1.userValidation, UserController.create);
router.get("/:id", UserController.getAll);
router.delete("/:id", UserController.remove);
router.put("/:id", validation_1.userValidation, UserController.updateUsers);
router.patch("/:id", validation_1.userValidation, UserController.updateDetail);
module.exports = router;
exports.localHost = `http://localhost:${_1.port};`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9yb3V0ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5QkFBMEI7QUFFMUIsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQ2xDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNoQyw4RUFBZ0U7QUFDaEUsd0RBQXlEO0FBRXpELE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUVoRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSwyQkFBYyxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUV4RCxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFMUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRTdDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLDJCQUFjLEVBQUUsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRS9ELE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLDJCQUFjLEVBQUUsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRWxFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0FBQ1gsUUFBQSxTQUFTLEdBQUcsb0JBQW9CLE9BQUksR0FBRyxDQUFDIn0=
