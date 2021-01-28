"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsersFromRepo = exports.updateSinglePropertyFromRepo = exports.updateFromRepo = exports.deleteByIdFromRepo = exports.getUsersByNameAndAgeFromRepo = exports.getUsersByIdFromRepo = exports.getAllUserFromRepo = exports.users = void 0;
require("reflect-metadata");
const Users_1 = require("../entity/Users");
const typeorm_1 = require("typeorm");
const { v4: uuidv4 } = require("uuid");
const userExample = {
  id: "1",
  name: "example",
  age: 24,
};
exports.users = [userExample];
async function getAllUserFromRepo() {
  const connection = typeorm_1.getConnection();
  return await connection.manager.find(Users_1.Users);
}
exports.getAllUserFromRepo = getAllUserFromRepo;
async function getUsersByIdFromRepo(id) {
  const connection = typeorm_1.getConnection();
  const userRepo = connection.getRepository(Users_1.Users);
  try {
    return await userRepo.findOne(id);
  } catch (e) {
    throw e;
  }
}
exports.getUsersByIdFromRepo = getUsersByIdFromRepo;
async function getUsersByNameAndAgeFromRepo(name = undefined, age = undefined) {
  const connection = typeorm_1.getConnection();
  const userRepo = connection.getRepository(Users_1.Users);
  return await userRepo.find({ where: { name: name, age: age } });
}
exports.getUsersByNameAndAgeFromRepo = getUsersByNameAndAgeFromRepo;
async function deleteByIdFromRepo(id) {
  const connection = typeorm_1.getConnection();
  const userRepo = connection.getRepository(Users_1.Users);
  try {
    return await userRepo.delete({ id });
  } catch (e) {
    throw e;
  }
}
exports.deleteByIdFromRepo = deleteByIdFromRepo;
async function updateFromRepo(userInformation) {
  const { name, age, id } = userInformation;
  const connection = typeorm_1.getConnection();
  const foundUser = await getUsersByIdFromRepo(id);
  if (foundUser) {
    foundUser.name = name;
    foundUser.age = age;
    await connection.manager.save(foundUser);
  } else {
    throw new Error("no such id");
  }
}
exports.updateFromRepo = updateFromRepo;
async function updateSinglePropertyFromRepo(userInformation) {
  const { name, age, id } = userInformation;
  try {
    const connection = typeorm_1.getConnection();
    const userToUpdate = await getUsersByIdFromRepo(id);
    console.log("userToUpdate is" + userToUpdate);
    if (!userToUpdate) {
      return "the id is incorrect";
    } else {
      name ? (userToUpdate.name = name) : (userToUpdate.age = age);
      await connection.manager.save(userToUpdate);
    }
    return userToUpdate;
  } catch (e) {
    return e;
  }
}
exports.updateSinglePropertyFromRepo = updateSinglePropertyFromRepo;
async function createUsersFromRepo(userInformation) {
  const { name, age } = userInformation;
  try {
    const connection = typeorm_1.getConnection();
    const user = new Users_1.Users();
    user.id = uuidv4();
    user.name = name;
    user.age = age;
    await connection.manager.save(user);
    return user.id;
  } catch (err) {
    throw err;
  }
}
exports.createUsersFromRepo = createUsersFromRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvc2l0b3JpZXMvcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw0QkFBMEI7QUFDMUIsMkNBQXdDO0FBQ3hDLHFDQUF3QztBQUV4QyxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN2QyxNQUFNLFdBQVcsR0FBUztJQUN4QixFQUFFLEVBQUUsR0FBRztJQUNQLElBQUksRUFBRSxTQUFTO0lBQ2YsR0FBRyxFQUFFLEVBQUU7Q0FDUixDQUFBO0FBRVksUUFBQSxLQUFLLEdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUVwQyxLQUFLLFVBQVUsa0JBQWtCO0lBQ3RDLE1BQU0sVUFBVSxHQUFHLHVCQUFhLEVBQUUsQ0FBQztJQUNuQyxPQUFPLE1BQU0sVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBSyxDQUFDLENBQUM7QUFDOUMsQ0FBQztBQUhELGdEQUdDO0FBRU0sS0FBSyxVQUFVLG9CQUFvQixDQUFDLEVBQU87SUFFaEQsTUFBTSxVQUFVLEdBQUcsdUJBQWEsRUFBRSxDQUFDO0lBQ25DLE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBSyxDQUFDLENBQUM7SUFDakQsSUFBSTtRQUNGLE9BQU8sTUFBTSxRQUFRLENBQUMsT0FBTyxDQUFFLEVBQUUsQ0FBRSxDQUFDO0tBQ3JDO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixNQUFPLENBQUMsQ0FBQztLQUNWO0FBRUgsQ0FBQztBQVZELG9EQVVDO0FBRU0sS0FBSyxVQUFVLDRCQUE0QixDQUFDLE9BQTJCLFNBQVMsRUFBRSxNQUEwQixTQUFTO0lBQzFILE1BQU0sVUFBVSxHQUFHLHVCQUFhLEVBQUUsQ0FBQztJQUNuQyxNQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQUssQ0FBQyxDQUFDO0lBQ2pELE9BQU8sTUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0FBQ2pFLENBQUM7QUFKRCxvRUFJQztBQUVNLEtBQUssVUFBVSxrQkFBa0IsQ0FBQyxFQUFVO0lBQ2pELE1BQU0sVUFBVSxHQUFHLHVCQUFhLEVBQUUsQ0FBQztJQUNuQyxNQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQUssQ0FBQyxDQUFDO0lBQ2pELElBQUk7UUFDRixPQUFPLE1BQU0sUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDdEM7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLE1BQU8sQ0FBQyxDQUFDO0tBQ1Y7QUFDSCxDQUFDO0FBUkQsZ0RBUUM7QUFFTSxLQUFLLFVBQVUsY0FBYyxDQUFDLGVBQXFCO0lBQ3hELE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLGVBQWUsQ0FBQztJQUMxQyxNQUFNLFVBQVUsR0FBRyx1QkFBYSxFQUFFLENBQUM7SUFDbkMsTUFBTSxTQUFTLEdBQUcsTUFBTSxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqRCxJQUFJLFNBQVMsRUFBRTtRQUNiLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLFNBQVMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLE1BQU0sVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDMUM7U0FBTTtRQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDL0I7QUFJSCxDQUFDO0FBZEQsd0NBY0M7QUFFTSxLQUFLLFVBQVUsNEJBQTRCLENBQUMsZUFBcUI7SUFDdEUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsZUFBZSxDQUFDO0lBQzFDLElBQUc7UUFDRCxNQUFNLFVBQVUsR0FBRyx1QkFBYSxFQUFFLENBQUM7UUFDbkMsTUFBTSxZQUFZLEdBQUcsTUFBTSxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLFlBQVksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDakIsT0FBTyxxQkFBcUIsQ0FBQztTQUM5QjthQUFLO1lBQ0osSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDekQsTUFBTSxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM3QztRQUNELE9BQU8sWUFBWSxDQUFDO0tBQ3JCO0lBQUMsT0FBTyxDQUFDLEVBQUM7UUFDVCxPQUFPLENBQUMsQ0FBQztLQUNWO0FBRUgsQ0FBQztBQWpCRCxvRUFpQkM7QUFFTSxLQUFLLFVBQVUsbUJBQW1CLENBQUMsZUFBcUI7SUFDN0QsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxlQUFlLENBQUM7SUFDdEMsSUFBSTtRQUNGLE1BQU0sVUFBVSxHQUFHLHVCQUFhLEVBQUUsQ0FBQztRQUNuQyxNQUFNLElBQUksR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBVyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLEdBQUcsR0FBVyxHQUFHLENBQUM7UUFDdkIsTUFBTSxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7S0FFaEI7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLE1BQU8sR0FBRyxDQUFBO0tBQ1g7QUFDSCxDQUFDO0FBZEQsa0RBY0MifQ==
