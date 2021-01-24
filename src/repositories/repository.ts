import { User } from "../types/types";
import { getUsersById } from "../services/usersService";
import "reflect-metadata";

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

export function getUsersByIdFromRepo(id: any) {

  return users.find(user => user.id === id);
}

export function getUsersByNameAndAgeFromRepo(name : string | undefined = undefined, age : string | undefined = undefined) {
  if (name && !age) {
    return users.filter(user => user.name === name)
  } else if (!name && age) {
    return users.filter(user => user.age === parseInt(age));
  } else {
    return users.filter(user => user.name === name && user.age === parseInt(age as string));
  }
}

export function deleteByIdFromRepo(id: string) {
  const IndexOfElementToDelete = users.indexOf(getUsersById(id) as User);

  return users.splice(IndexOfElementToDelete, 1);
}

export function updateFromRepo(userInformation: User) {
  const { name, age } = userInformation;
  const userToUpdate = getUsersById(userInformation.id as string);
  if (userToUpdate === undefined) {
    throw new Error("the id is incorrect");
  }
  userToUpdate.name = name;
  userToUpdate.age = age;

  return userToUpdate;
}

export function updateSinglePropertyFromRepo(userInformation: User) {
  const { name, age } = userInformation;
  const userToUpdate = getUsersById(userInformation.id as string);
  if (userToUpdate === undefined) {
    throw new Error("the id is incorrect");
  }
  name ? userToUpdate.name = name : userToUpdate.age = age;
  return userToUpdate;
}

export function createUsersFromRepo(userInformation: User) {
  const { name, age } = userInformation;
  let id = uuidv4();
  users.push({ name, age, id });
  return getUsersById(id).id;
}
