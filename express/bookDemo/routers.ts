const express = require('express')
const router = express.Router()
import { getBook, createBook } from "./bookService"

router.get("/", function (req,res) {
  res.send( getBook());
})

router.post("/", function (req,res) {
   res.send(createBook(req.body));
})

module.exports = router;