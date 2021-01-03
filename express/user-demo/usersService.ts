import { User } from "./types";
import { users } from './repository'
import { userValidation } from "./validation";

const { v4: uuidv4 } = require('uuid')

export function createUser(userInformation: User) {
  const { name, age } = userInformation;
  userValidation({ name, age });
  let id = uuidv4();
  users.push({ name, age, id });

  return getUserById(id).id;
}

export function getAllUser() {
  return users;
}

export function getUserById(id) {
  return users.find(user => user.id === id);
}

export function getUserByNameAndAge(name = undefined, age = undefined) {
  if (name && !age) {
    return users.filter(user => user.name === name)
  } else if (!name && age) {
    return users.filter(user => user.age === parseInt(age));
  } else {
    return users.filter(user => user.name === name && user.age === parseInt(age));
  }
}


export function deleteById(id) {
  const IndexOfElementToDelete = users.indexOf(getUserById(id));

  return users.splice(IndexOfElementToDelete, 1);
}

export function update(userInformation: User) {
  const { name, age } = userInformation;
  userValidation({ name, age });
  const userToUpdate = getUserById(userInformation.id);
  userToUpdate.name = name;
  userToUpdate.age = age;

  return userToUpdate;
}

export function updateSingleProperty(userInformation: User) {
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
