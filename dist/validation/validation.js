"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const schema_1 = require("../common/schema");
const Ajv = require("ajv");
function userValidation(req, res, next) {
  let ajv = new Ajv();
  let validate = ajv.compile(schema_1.schema);
  const { name, age } = req.body;
  let valid = validate({ name, age });
  if (!valid) {
    return res.status(400).json({ error: "invalid input" });
  } else {
    return next();
  }
}
exports.userValidation = userValidation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWxpZGF0aW9uL3ZhbGlkYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQTBDO0FBQzFDLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUUzQixTQUFnQixjQUFjLENBQUMsR0FBUSxFQUFFLEdBQVEsRUFBRSxJQUFTO0lBQzFELElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDcEIsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxlQUFNLENBQUMsQ0FBQztJQUNuQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDL0IsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDcEMsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNWLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztLQUN6RDtTQUFNO1FBQ0wsT0FBTyxJQUFJLEVBQUUsQ0FBQztLQUNmO0FBQ0gsQ0FBQztBQVZELHdDQVVDIn0=
