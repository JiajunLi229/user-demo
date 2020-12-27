import { book } from "./types";

const { v4: uuidv4 } = require('uuid')

const bookExample: book = {
  id: "1",
  name: "example",
  author: "jiajunLi"
}
const books: book[] = [bookExample];


export function createBook(bookInformation: book) {
  bookInformation.id = uuidv4;
  books.push(bookInformation);
  return bookInformation.id;
}

export function getBook() {
  return books;
}
