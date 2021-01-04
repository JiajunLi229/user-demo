import { User } from "./types";
import { getUserById } from "./usersService";
import { userValidation } from "./validation";
const { v4: uuidv4 } = require('uuid');
const userExample: User = {
  id: "1",
  name: "example",
  age: 24
}

export const users: User[] = [userExample];

export function getAllUserFromRepo() {
  return users;
}
export function getUserByIdFromRepo(id) {
  return users.find(user => user.id === id);
}

export function getUserByNameAndAgeFromRepo(name = undefined, age = undefined) {
  if (name && !age) {
    return users.filter(user => user.name === name)
  } else if (!name && age) {
    return users.filter(user => user.age === parseInt(age));
  } else {
    return users.filter(user => user.name === name && user.age === parseInt(age));
  }
}

export function deleteByIdFromRepo(id) {
  const IndexOfElementToDelete = users.indexOf(getUserById(id));

  return users.splice(IndexOfElementToDelete, 1);
}

export function updateFromRepo(userInformation: User) {
  const { name, age } = userInformation;
  userValidation({ name, age });
  const userToUpdate = getUserById(userInformation.id);
  userToUpdate.name = name;
  userToUpdate.age = age;

  return userToUpdate;
}

export function updateSinglePropertyFromRepo(userInformation: User) {
  const { name, age } = userInformation;
  userValidation({ name, age });
  const userToUpdate = getUserById(userInformation.id);
  if (name) {
    userToUpdate.name = name;
  } else {
    userToUpdate.age = age;
  }

  return userToUpdate;
}
export function createUserFromRepo(userInformation: User) {
  const { name, age } = userInformation;
  userValidation({ name, age });
  let id = uuidv4();
  users.push({ name, age, id });

  return getUserById(id).id;
}
