import {
  createUsers,
  deleteById,
  getAllUsers,
  getUsersById,
  getUsersByNameAndAge,
  update,
  updateSingleProperty,
} from "../services/usersService";
import { localHost } from "../routers";
import { createConnection } from "typeorm";

export const create = async function (req: any, res: any) {
  res
    .status(201)
    .header("Location", `${localHost}/books/${await createUsers(req.body)}`)
    .end();
};

export const getAll = async function (req: any, res: any) {
  res.send(await getUsersById(req.params.id));
};

export const getUserByDetail = async function (req: any, res: any) {
  const { age, name } = req.query;
  age || name
    ? res.json(await getUsersByNameAndAge(name, age)).end()
    : res.send(await getAllUsers());
};

export const remove = async function (req: any, res: any) {
  await deleteById(req.params.id);
  res.status(204).end();
};

export const updateUsers = async function (req: any, res: any) {
  const { id } = req.params;
  await update({ ...req.body, id });
  res.status(200).end();
};

export const updateDetail = async function (req: any, res: any) {
  const { id } = req.params;
  await updateSingleProperty({ ...req.body, id });
  res.status(200).end();
};
