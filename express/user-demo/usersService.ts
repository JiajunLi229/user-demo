import { User } from "./types";
import {
  createUserFromRepo,
  deleteByIdFromRepo,
  getAllUserFromRepo,
  getUserByIdFromRepo,
  getUserByNameAndAgeFromRepo, updateFromRepo, updateSinglePropertyFromRepo,
} from './repository'


export function createUser(userInformation: User) {
  return createUserFromRepo(userInformation);
}

export function getAllUser() {
  return getAllUserFromRepo();
}

export function getUserById(id) {
  return getUserByIdFromRepo(id);
}

export function getUsersByNameAndAge(name, age) {
  return getUserByNameAndAgeFromRepo(name, age);
}

export function deleteById(id) {
  return deleteByIdFromRepo(id);
}

export function update(userInformation: User) {
  return updateFromRepo(userInformation);
}

export function updateSingleProperty(userInformation: User) {
  return updateSinglePropertyFromRepo(userInformation);
}
