import { User } from "../types/types";
import {
  createUsersFromRepo,
  deleteByIdFromRepo,
  getAllUserFromRepo,
  getUsersByIdFromRepo,
  getUsersByNameAndAgeFromRepo,
  updateFromRepo,
  updateSinglePropertyFromRepo,
} from "../repositories/repository";

export async function createUsers(userInformation: User) {
  return await createUsersFromRepo(userInformation);
}

export async function getAllUsers() {
  return await getAllUserFromRepo();
}

export async function getUsersById(id: string) {
  return await getUsersByIdFromRepo(id);
}

export async function getUsersByNameAndAge(name: string, age: string) {
  return await getUsersByNameAndAgeFromRepo(name, age);
}

export async function deleteById(id: string) {
  return await deleteByIdFromRepo(id);
}

export async function update(userInformation: User) {
  return await updateFromRepo(userInformation);
}

export async function updateSingleProperty(userInformation: User) {
  return await updateSinglePropertyFromRepo(userInformation);
}
