const express = require('express')
const router = express.Router();
import { getUser, createUser, getUserById, deleteById, update, updateSingleProperty } from "./userService"

const localHost = 'http://localhost:3000';
router.get("/", function (req, res) {
  if (req.query.id) {
    res.send(getUserById(req.query.id));
  } else {
    res.send(getUser());
  }
})

router.post("/", function (req, res) {
  try {
    res.status(201).header('Location',`${localHost}/books/${createUser(req.body)}`).end();
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
})

router.get("/:id", function (req, res) {
  res.send(getUserById(req.params.id));
})

router.delete("/:id", function (req, res) {
  deleteById(req.params.id);
  res.status(204).end();
})

router.put("/:id", function (req, res) {
  const { id } = req.params;

  try {
    update({ ...req.body, id });
    res.status(200).end();
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
})

router.patch("/:id", function (req, res) {
  const { id } = req.params;

  try {
    updateSingleProperty({ ...req.body, id });
    res.status(200).end();
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
})

module.exports = router;
