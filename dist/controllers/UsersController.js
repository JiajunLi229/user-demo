"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDetail = exports.updateUsers = exports.remove = exports.getUserByDetail = exports.getAll = exports.create = void 0;
const usersService_1 = require("../services/usersService");
const routers_1 = require("../routers");
const create = async function (req, res) {
  res
    .status(201)
    .header(
      "Location",
      `${routers_1.localHost}/books/${await usersService_1.createUsers(
        req.body
      )}`
    )
    .end();
};
exports.create = create;
const getAll = async function (req, res) {
  res.send(await usersService_1.getUsersById(req.params.id));
};
exports.getAll = getAll;
const getUserByDetail = async function (req, res) {
  const { age, name } = req.query;
  age || name
    ? res.json(await usersService_1.getUsersByNameAndAge(name, age)).end()
    : res.send(await usersService_1.getAllUsers());
};
exports.getUserByDetail = getUserByDetail;
const remove = async function (req, res) {
  await usersService_1.deleteById(req.params.id);
  res.status(204).end();
};
exports.remove = remove;
const updateUsers = async function (req, res) {
  const { id } = req.params;
  await usersService_1.update({ ...req.body, id });
  res.status(200).end();
};
exports.updateUsers = updateUsers;
const updateDetail = async function (req, res) {
  const { id } = req.params;
  await usersService_1.updateSingleProperty({ ...req.body, id });
  res.status(200).end();
};
exports.updateDetail = updateDetail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlcnNDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL1VzZXJzQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyREFLa0M7QUFDbEMsd0NBQXVDO0FBR2hDLE1BQU0sTUFBTSxHQUFHLEtBQUssV0FBVyxHQUFRLEVBQUUsR0FBUTtJQUV0RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsR0FBRyxtQkFBUyxVQUFVLE1BQU0sMEJBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2hHLENBQUMsQ0FBQTtBQUhZLFFBQUEsTUFBTSxVQUdsQjtBQUVNLE1BQU0sTUFBTSxHQUFHLEtBQUssV0FBVyxHQUFRLEVBQUUsR0FBUTtJQUN0RCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sMkJBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDOUMsQ0FBQyxDQUFBO0FBRlksUUFBQSxNQUFNLFVBRWxCO0FBRU0sTUFBTSxlQUFlLEdBQUcsS0FBSyxXQUFXLEdBQVEsRUFBRSxHQUFRO0lBQy9ELE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNoQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLG1DQUFvQixDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sMEJBQVcsRUFBRSxDQUFDLENBQUM7QUFDeEcsQ0FBQyxDQUFBO0FBSFksUUFBQSxlQUFlLG1CQUczQjtBQUVNLE1BQU0sTUFBTSxHQUFHLEtBQUssV0FBVyxHQUFRLEVBQUUsR0FBUTtJQUN0RCxNQUFNLHlCQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUhXLFFBQUEsTUFBTSxVQUdqQjtBQUVLLE1BQU0sV0FBVyxHQUFHLEtBQUssV0FBVyxHQUFRLEVBQUUsR0FBUTtJQUMzRCxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUUxQixNQUFNLHFCQUFNLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNsQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUxXLFFBQUEsV0FBVyxlQUt0QjtBQUVLLE1BQU0sWUFBWSxHQUFHLEtBQUssV0FBVyxHQUFRLEVBQUUsR0FBUTtJQUM1RCxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUUxQixNQUFNLG1DQUFvQixDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDaEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUN4QixDQUFDLENBQUM7QUFMVyxRQUFBLFlBQVksZ0JBS3ZCIn0=
