import { User } from "../types/types";
import {
  createUsersFromRepo,
  deleteByIdFromRepo,
  getAllUserFromRepo,
  getUsersByIdFromRepo,
  getUsersByNameAndAgeFromRepo, updateFromRepo, updateSinglePropertyFromRepo,
} from '../repositories/repository'


export function createUsers(userInformation: User) {
  return createUsersFromRepo(userInformation);
}

export function getAllUsers() {
  return getAllUserFromRepo();
}

export function getUsersById(id) {
  return getUsersByIdFromRepo(id);
}

export function getUsersByNameAndAge(name, age) {
  return getUsersByNameAndAgeFromRepo(name, age);
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
