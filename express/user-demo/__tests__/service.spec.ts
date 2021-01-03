import { createUser, getAllUser, getUserById, getUserByNameAndAge } from "../usersService";
import { User } from "../types";

const userExample: User = {
  id: "1",
  name: "example",
  age: 24
}

describe('get users', () => {
  it('should get all users', function () {
    expect(getAllUser()).toEqual([userExample]);
  });

  it('should get user by id', function () {
    expect(getUserById("1")).toEqual(userExample);
  })

  it('should get user by name', function () {
    expect(getUserByNameAndAge("example")).toEqual([userExample]);
  })

  it('should get user by age', function () {
    expect(getUserByNameAndAge(undefined, 24)).toEqual([userExample]);
  })

  it('should get user by id', function () {
    expect(getUserById("1")).toEqual(userExample);
  })
});

describe('create users', () => {
  it('should create users', function () {
    const newUser = {
      name: "trump",
      age: 88
    }
    expect(getUserById(createUser(newUser)).name).toEqual(newUser.name);
    expect(getUserById(createUser(newUser)).age).toEqual(newUser.age);
  });

  it('should not create users when name is too long', function () {
      const invalidUser = {
        name: "trumptrumptrumptrumptrumptrump" +
          "trumptrumptrumptrumptrumptrumptrump" +
          "trumptrumptrumptrumptrumptrumptrump" +
          "trumptrumptrumptrumptrumptrumptrump" +
          "trumptrumptrumptrumptrumptrumptrump" +
          "trumptrumptrumptrumptrumptrumptrump" +
          "trumptrumptrumptrumptrumptrumptrump" +
          "trumptrumptrumptrump",

        age: 88
      }
      expect(() => (createUser(invalidUser))).toThrow(Error);
    }
  );

  it('should not create users when age is negative ', function () {
      const invalidUser = {
        name: "trump",
        age: -1
      }
      expect(() => (createUser(invalidUser))).toThrow(Error);
    }
  );

  it('should not create users when age is too long ', function () {
      const invalidUser = {
        name: "trump",
        age: 133
      }
      expect(() => (createUser(invalidUser))).toThrow(Error);
    }
  );


});
