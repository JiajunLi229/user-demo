export const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 1,
      maxLength: 100
    },
    age: {
      type: 'integer',
      minimum: 0,
      maximum: 120
    },
  },
};
