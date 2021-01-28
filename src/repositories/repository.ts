import { User } from "../types/types";
import "reflect-metadata";
import { Users } from "../entity/Users";
import { getConnection } from "typeorm";

const { v4: uuidv4 } = require("uuid");
const userExample: User = {
  id: "1",
  name: "example",
  age: 24,
};

export const users: User[] = [userExample];

export async function getAllUserFromRepo() {
  const connection = getConnection();
  return await connection.manager.find(Users);
}

export async function getUsersByIdFromRepo(
  id: any
): Promise<Users | undefined> {
  try {
    const connection = getConnection();
    const userRepo = connection.getRepository(Users);
    return await userRepo.findOne(id);
  } catch (e) {
    throw e;
  }
}

export async function getUsersByNameAndAgeFromRepo(
  name: string | undefined = undefined,
  age: string | undefined = undefined
) {
  try {
    const connection = getConnection();
    const userRepo = connection.getRepository(Users);
    return await userRepo.find({ where: { name: name, age: age } });
  } catch (e) {
    return e;
  }
}

export async function deleteByIdFromRepo(id: string) {
  const connection = getConnection();
  const userRepo = connection.getRepository(Users);
  try {
    return await userRepo.delete({ id });
  } catch (e) {
    throw e;
  }
}

export async function updateFromRepo(userInformation: User) {
  const { name, age, id } = userInformation;
  const connection = getConnection();
  const foundUser = await getUsersByIdFromRepo(id);
  if (foundUser) {
    foundUser.name = name;
    foundUser.age = age;
    await connection.manager.save(foundUser);
  } else {
    throw new Error("no such id");
  }
}

export async function updateSinglePropertyFromRepo(userInformation: User) {
  const { name, age, id } = userInformation;
  const connection = getConnection();
  const userToUpdate = await getUsersByIdFromRepo(id);
  console.log("userToUpdate is" + userToUpdate);
  if (!userToUpdate) {
    throw new Error("user notFound");
  } else {
    name ? (userToUpdate.name = name) : (userToUpdate.age = age);
    await connection.manager.save(userToUpdate);
  }
  return userToUpdate;
}

export async function createUsersFromRepo(userInformation: User) {
  const { name, age } = userInformation;
  try {
    const connection = getConnection();
    const user = new Users();
    user.id = uuidv4();
    user.name = <string>name;
    user.age = <number>age;
    await connection.manager.save(user);
    return user.id;
  } catch (err) {
    throw err;
  }
}
