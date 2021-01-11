import {
  createUser,
  deleteById,
  getAllUser,
  getUserById,
  getUsersByNameAndAge,
  update,
  updateSingleProperty
} from "../usersService";
import { localHost } from "../routers";

export const create = function (req, res) {
  res.status(201).header('Location', `${localHost}/books/${createUser(req.body)}`).end();
}

export const getAll = function (req, res) {
  res.send(getUserById(req.params.id));
}

export const getUserByDetail = function (req, res) {
  const { age, name } = req.query;
  (age || name) ? res.json(getUsersByNameAndAge(name, age)).end() : res.send(getAllUser());
}

export const remove = function (req, res) {
  deleteById(req.params.id);
  res.status(204).end();
};

export const updateUsers = function (req, res) {
  const { id } = req.params;

  update({ ...req.body, id });
  res.status(200).end();
};

export const updateDetail = function (req, res) {
  const { id } = req.params;

  updateSingleProperty({ ...req.body, id });
  res.status(200).end();
};
