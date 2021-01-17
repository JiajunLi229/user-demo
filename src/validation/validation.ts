import { schema } from "../common/schema";
const Ajv = require('ajv');

export function userValidation(req, res, next) {
  let ajv = new Ajv();
  let validate = ajv.compile(schema);
  const { name, age } = req.body;
  let valid = validate({ name, age });
  if (!valid) {
    return res.status(400).json({ error: "invalid input" });
  } else {
    return next();
  }
}


