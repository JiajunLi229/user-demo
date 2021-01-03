const Ajv = require('ajv');

let schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 1,
      maxLength: 100
    },
    age: {
      type: 'integer',
      minLength: 0,
      maxLength: 100
    },
  },
};

let ajv = new Ajv();
let validate = ajv.compile(schema);

export function userValidation(userInput) {
  const { name, age } = userInput;
  let valid = validate({ name, age });
  if (!valid) throw new Error('invalid input');
}


