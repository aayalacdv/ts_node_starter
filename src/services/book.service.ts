import { IBook } from "./../models/book.model";
import bookModel from "../models/book.model";
import Book from "../models/book.model";

//Definimos funciones para hacer queries a la base de datos y manejar los posibles errores
//Get all books
export async function getAllBooks() {
  return Book.find().catch((error) => {
    console.error("Error encontrando libros", error);
  });
}

//Create book
export async function createBook(book: IBook) {
  return Book.create(book).catch((error) => {
    console.error("Error crando un libro ", error);
  });
}

//Get a book for id :
export async function getBook(bookId: string) {
  return Book.findOne({ _id: bookId }).catch((error) => {
    console.error("Error encontradndo libro con id: " + bookId, error);
  });
}

//Delete book
export async function deleteBook(bookId: string) {
  return Book.deleteOne({ _id: bookId }).catch((error) => {
    console.error("Error borrando libro con id: " + bookId, error);
  });
}

//Update a book
export async function updateBook(book: IBook, bookId: string) {
  return Book.updateOne(
    { _id: bookId },
    { name: book.name, author: book.author, price: book.price }
  )
    .then((book) => {
        console.log("Libro cambiado"); 
    })
    .catch((error) => {
      console.error("Error borrando libro con id: " + bookId, error);
    });
}
