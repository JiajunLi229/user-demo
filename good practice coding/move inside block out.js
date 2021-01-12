const { unset,set,get } = require("lodash");


const common = {
  name: 'jiajunli',
  age: 88,
  profession: {
    position: "xian",
    title:"TWER"
  },
  careerTime: '2 month'
}

const mappings = [{
  from: "profession.title",
  to: "profession"
}];

mappings.map(({ from, to }) => {
  set(common, to, get(common, from));
  unset(common, from);
});

console.log(JSON.stringify(common));
