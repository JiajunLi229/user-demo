import {
  createUser,
  deleteById,
  getAllUser,
  getUserById,
  getUserByNameAndAge,
  update,
  updateSingleProperty
} from "../usersService";
import { localHost } from "../routers";

export const createUserController = function (req, res) {
  try {
    res.status(201).header('Location', `${localHost}/books/${createUser(req.body)}`).end();
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
}

export const getUserByIdController = function (req, res) {
  res.send(getUserById(req.params.id));
}

export const getUserByPropertyController = function (req, res) {
  const { age, name } = req.query;
  if (age || name) {
    res.json(getUserByNameAndAge(name, age)).end();
  }else {
    res.send(getAllUser());
  }

}

export const deleteUserController = function (req, res) {
  deleteById(req.params.id);
  res.status(204).end();
};

export const updateUserController = function (req, res) {
  const { id } = req.params;

  try {
    update({ ...req.body, id });
    res.status(200).end();
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
};

export const updateSinglePropertyController = function (req, res) {
  const { id } = req.params;

  try {
    updateSingleProperty({ ...req.body, id });
    res.status(200).end();
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
};
