import {
  createUsersFromRepo,
  getAllUserFromRepo,
  getUsersByIdFromRepo,
  getUsersByNameAndAgeFromRepo
} from "../repositories/repository";
import { User } from "../types/types";

const userExample: User = {
  id: "1",
  name: "example",
  age: 24
}

describe('get users', () => {

  it('should get all users', function () {
    expect(getAllUserFromRepo()).toEqual([userExample]);
  });
  it('should get user by id', function () {
    expect(getUsersByIdFromRepo("1")).toEqual(userExample);
  })

  it('should get user by name', function () {
    expect(getUsersByNameAndAgeFromRepo("example")).toEqual([userExample]);
  })

  it('should get user by age', function () {
    expect(getUsersByNameAndAgeFromRepo(undefined, 24)).toEqual([userExample]);
  })

  it('should get user by id', function () {
    expect(getUsersByIdFromRepo("1")).toEqual(userExample);
  })
});

describe('create users', () => {
  it('should create users', function () {
    const newUser = {
      name: "trump",
      age: 88
    }
    const newUserId = createUsersFromRepo(newUser);
    expect(getUsersByIdFromRepo(newUserId).name).toEqual(newUser.name);
    expect(getUsersByIdFromRepo(newUserId).age).toEqual(newUser.age);
  });
})
