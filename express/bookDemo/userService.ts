import { user } from "./types";

const { v4: uuidv4 } = require('uuid')

const userExample: user = {
  id: "1",
  name: "example",
  age: "24"
}

const users: user[] = [userExample];

function nameAndAgeCheck(name, age) {
  if (name.length > 100 || +age > 100 || +age < 0) {
    throw new Error ("incorrect input of name or age");
  }
}

export function createUser(userInformation: user) {
  const { name, age } = userInformation;
  nameAndAgeCheck(name, age);
  let id = uuidv4();
  users.push({ name, age, id });

  return getUserById(id);
}

export function getUser() {
  return users;
}

export function getUserById(id) {
  return users.find(user => user.id === id);
}

export function deleteById(id) {
  const IndexOfElementToDelete = users.indexOf(getUserById(id));

  return users.splice(IndexOfElementToDelete, 1);
}

export function update(userInformation) {
  const { name, age } = userInformation;
  nameAndAgeCheck(name, age);
  const userToUpdate = getUserById(userInformation.id);
  userToUpdate.name = name;
  userToUpdate.age = age;

  return userToUpdate;
}

export function updateSingleProperty(userInformation) {
  const { name, age } = userInformation;
  nameAndAgeCheck(name, age);
  const userToUpdate = getUserById(userInformation.id);
  if (name) {
    userToUpdate.name = name;
  } else {
    userToUpdate.age = age;
  }

  return userToUpdate;
}
