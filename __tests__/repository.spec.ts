import {
  createUserFromRepo,
  getAllUserFromRepo,
  getUserByIdFromRepo,
  getUserByNameAndAgeFromRepo
} from "../repository";
import { User } from "../types";

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
    expect(getUserByIdFromRepo("1")).toEqual(userExample);
  })

  it('should get user by name', function () {
    expect(getUserByNameAndAgeFromRepo("example")).toEqual([userExample]);
  })

  it('should get user by age', function () {
    expect(getUserByNameAndAgeFromRepo(undefined, 24)).toEqual([userExample]);
  })

  it('should get user by id', function () {
    expect(getUserByIdFromRepo("1")).toEqual(userExample);
  })
});

describe('create users', () => {
  it('should create users', function () {
    const newUser = {
      name: "trump",
      age: 88
    }
    const newUserId = createUserFromRepo(newUser);
    expect(getUserByIdFromRepo(newUserId).name).toEqual(newUser.name);
    expect(getUserByIdFromRepo(newUserId).age).toEqual(newUser.age);
  });
})
