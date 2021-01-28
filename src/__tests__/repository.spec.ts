// import {
//   createUsersFromRepo,
//   getAllUserFromRepo,
//   getUsersByIdFromRepo,
//   getUsersByNameAndAgeFromRepo
// } from "../repositories/repository";
// import { User } from "../types/types";
//
// const userExample: User = {
//   id: "1",
//   name: "example",
//   age: 24
// }
//
// describe('get users', () => {
//
//   it('should get all users', async function () {
//     expect(getAllUserFromRepo()).toEqual([userExample]);
//   });
//   it('should get user by id', async function () {
//     expect(getUsersByIdFromRepo("1")).toEqual(userExample);
//   })
//
//   it('should get user by name', async function () {
//     expect(getUsersByNameAndAgeFromRepo("example")).toEqual([userExample]);
//   })
//
//   it('should get user by age', async function () {
//     expect(getUsersByNameAndAgeFromRepo(undefined, "24")).toEqual([userExample]);
//   })
//
//   it('should get user by id', async function () {
//     expect(getUsersByIdFromRepo("1")).toEqual(userExample);
//   })
// });
//
// // describe('create users', async() => {
// //   it('should create users', async function () {
// //     const newUser = {
// //       name: "trump",
// //       age: 88
// //     }
// //     const newUserId = createUsersFromRepo(newUser);
// //     expect((await getUsersByIdFromRepo(newUserId)).name).toEqual(newUser.name);
// //     expect(await getUsersByIdFromRepo(newUserId).age).toEqual(newUser.age);
// //   });
// // })
