const common = {
  name: 'jiajunli',
  age: 88,
  profession: 'twer',
  careerTime: '2 month'
}

const configuration = ['name', 'profession'];

const filterValueByField = (object) => (acc, currentValue) => {
  acc[currentValue] = object[currentValue];
  return acc
};

const result = configuration.reduce(filterValueByField(common), {});

console.log(result);


