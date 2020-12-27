const express = require('express')

const router = express.Router();
import { getUser, createUser, getUserById, deleteById, update, updateSingleProperty } from "./userService"

router.get("/", function (req, res) {
  if (req.query.id) {
    res.send(getUserById(req.query.id));
  } else {
    res.send(getUser());
  }
})

router.post("/", function (req, res) {
  res.send(createUser(req.body));
})

router.get("/:id", function (req, res) {
  res.send(getUserById(req.params.id));
})

router.delete("/:id", function (req, res) {
  res.send(deleteById(req.params.id))

})

router.put("/:id", function (req, res) {
  const { id } = req.params;
  res.send(update({ ...req.body, id }));
})

router.patch("/:id", function (req, res) {
  const { id } = req.params;
  res.send(updateSingleProperty({ ...req.body, id }))
})


module.exports = router;