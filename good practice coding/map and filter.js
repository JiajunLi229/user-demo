const { pick} = require("lodash");
const configuration = ["name", "age",]

const staff = [
  {
    name: 'jiajunli',
    age: 88,
    profession: 'twer',
    careerTime: '2 month'
  },
  {
    name: 'jiajunli2',
    age: 11,
    profession: 'twer',
    careerTime: '2 month'
  },
  {
    name: 'jiajunli3',
    age: 13,
    profession: 'twer',
    careerTime: '2 month'
  },

];

const requiredStaffName = ["jiajunli"];
const filter = (neededInformation) =>
  configuration ? pick(neededInformation, configuration) : neededInformation;
const staffInformation =
  requiredStaffName.map((name) =>
    staff.map(filter).find((person) => person.name === name)
  );
console.log(staff.map(filter));
console.log(JSON.stringify(staffInformation));
