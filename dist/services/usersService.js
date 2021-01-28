"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSingleProperty = exports.update = exports.deleteById = exports.getUsersByNameAndAge = exports.getUsersById = exports.getAllUsers = exports.createUsers = void 0;
const repository_1 = require("../repositories/repository");
async function createUsers(userInformation) {
  return await repository_1.createUsersFromRepo(userInformation);
}
exports.createUsers = createUsers;
async function getAllUsers() {
  return await repository_1.getAllUserFromRepo();
}
exports.getAllUsers = getAllUsers;
async function getUsersById(id) {
  return await repository_1.getUsersByIdFromRepo(id);
}
exports.getUsersById = getUsersById;
async function getUsersByNameAndAge(name, age) {
  return await repository_1.getUsersByNameAndAgeFromRepo(name, age);
}
exports.getUsersByNameAndAge = getUsersByNameAndAge;
async function deleteById(id) {
  return await repository_1.deleteByIdFromRepo(id);
}
exports.deleteById = deleteById;
async function update(userInformation) {
  return await repository_1.updateFromRepo(userInformation);
}
exports.update = update;
async function updateSingleProperty(userInformation) {
  return await repository_1.updateSinglePropertyFromRepo(userInformation);
}
exports.updateSingleProperty = updateSingleProperty;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnNTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2VzL3VzZXJzU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwyREFJbUM7QUFHNUIsS0FBSyxVQUFXLFdBQVcsQ0FBQyxlQUFxQjtJQUN0RCxPQUFPLE1BQU0sZ0NBQW1CLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDcEQsQ0FBQztBQUZELGtDQUVDO0FBRU0sS0FBSyxVQUFVLFdBQVc7SUFDL0IsT0FBTyxNQUFNLCtCQUFrQixFQUFFLENBQUM7QUFDcEMsQ0FBQztBQUZELGtDQUVDO0FBRU0sS0FBSyxVQUFVLFlBQVksQ0FBQyxFQUFVO0lBQzNDLE9BQU8sTUFBTSxpQ0FBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBRkQsb0NBRUM7QUFFTSxLQUFLLFVBQVUsb0JBQW9CLENBQUMsSUFBYSxFQUFFLEdBQVk7SUFDcEUsT0FBTyxNQUFNLHlDQUE0QixDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN2RCxDQUFDO0FBRkQsb0RBRUM7QUFFTSxLQUFLLFVBQVUsVUFBVSxDQUFDLEVBQVc7SUFDMUMsT0FBTyxNQUFNLCtCQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3RDLENBQUM7QUFGRCxnQ0FFQztBQUVNLEtBQUssVUFBVSxNQUFNLENBQUMsZUFBcUI7SUFDaEQsT0FBTyxNQUFNLDJCQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUZELHdCQUVDO0FBRU0sS0FBSyxVQUFVLG9CQUFvQixDQUFDLGVBQXFCO0lBQzlELE9BQU8sTUFBTSx5Q0FBNEIsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM3RCxDQUFDO0FBRkQsb0RBRUMifQ==
