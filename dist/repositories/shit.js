"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Users_1 = require("../entity/Users");
typeorm_1
  .createConnection()
  .then(async (connection) => {
    console.log("Inserting a new user into the database...");
    const user = new Users_1.Users();
    user.name = "Timber";
    user.id = "id";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);
    console.log("Loading users from the database...");
    const users = await connection.manager.find(Users_1.Users);
    console.log("Loaded users: ", users);
    console.log(
      "Here you can setup and start express/koa/any other framework."
    );
  })
  .catch((error) => console.log(error));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvc2l0b3JpZXMvc2hpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUEwQjtBQUMxQixxQ0FBeUM7QUFDekMsMkNBQXNDO0FBRXRDLDBCQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsRUFBRTtJQUV2QyxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7SUFDekQsTUFBTSxJQUFJLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztJQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztJQUNyQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztJQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2QsTUFBTSxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVwRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7SUFDbEQsTUFBTSxLQUFLLEdBQUcsTUFBTSxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFLLENBQUMsQ0FBQztJQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXJDLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0RBQStELENBQUMsQ0FBQztBQUVqRixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMifQ==
