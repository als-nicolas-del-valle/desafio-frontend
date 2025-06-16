import axiosInstance from "../config/axios";
import { filterByTitleAuthorIsbn, validateBookData } from "../utils";

async function getBooks() {
  try {
    const books = await axiosInstance.get("/books");

    return books;
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

async function getBookById(bookId) {
  try {
    const book = await axiosInstance.get(`/books/${bookId}?_expand=author`);

    return book;
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

async function searchBookByNameAuthorIsbn(searchTerm) {
  try {
    const { data: books } = await axiosInstance.get(`/books?q=${searchTerm}`);

    const filteredBooks = filterByTitleAuthorIsbn(books, searchTerm);

    console.log(filteredBooks);

    return filteredBooks;
  } catch (error) {
    console.error(error);
  }
}

async function deleteBook(bookId) {
  try {
    await axiosInstance.delete(`/books/${bookId}`);

    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

async function postBook(data) {
  try {
    validateBookData(data);

    const response = await axiosInstance.post("/books", data);

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

export {
  getBooks,
  getBookById,
  searchBookByNameAuthorIsbn,
  deleteBook,
  postBook,
};
