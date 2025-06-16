import { useState, useEffect, useCallback } from "react";

import { getBooks, deleteBook } from "../../services";

import {
  BookItem,
  BookItemSkeleton,
  ModalContainer,
  SearchInput,
} from "../../components";

function AuthorsPage() {
  const [books, setBooks] = useState([]);
  const [loadingBooks, setLoadingBooks] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDeleteBook = useCallback(async (bookId, index) => {
    try {
      const response = await deleteBook(bookId);
      console.log("deleteaste un coso");
      //Borrar a mano en books para evitar hacer request denuevo
    } catch (err) {
      setError("Error eliminando un libro.");
      console.error("Error eliminando un libro:", err);
    }
  }, []);

  const fetchBooks = useCallback(async () => {
    setLoadingBooks(true);
    setError(null);
    try {
      const { data } = await getBooks();
      setBooks(data);
    } catch (err) {
      setError("Error obteniendo los libros.");
      console.error("Error obteniendo los libros:", err);
    } finally {
      setLoadingBooks(false);
    }
  }, []);

  return (
    <>
      <div>
        <h1 className="text-xl font-bold mb-4">Autores</h1>
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex flex-col gap-4 ">
          {loadingBooks && (
            <>
              <BookItemSkeleton />
              <BookItemSkeleton />
            </>
          )}
          {!loadingBooks &&
            !error &&
            books.length > 0 &&
            books.map((book, index) => (
              <BookItem
                key={book.id}
                onDelete={handleDeleteBook}
                index={index}
                book={book}
              />
            ))}
        </div>
        {!loadingBooks && !error && books.length === 0 && (
          <p>No hay libros disponibles.</p>
        )}
      </div>
    </>
  );
}

export default AuthorsPage;
