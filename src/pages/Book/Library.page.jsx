import { useState, useEffect, useCallback } from "react";

import { getBooks, deleteBook } from "../../services";

import {
  BookItem,
  BookItemSkeleton,
  DefaultButton,
  ModalContainer,
  SearchInput,
} from "../../components";
import BookModal from "../../components/Modal/BookModal.component";

function LibraryPage() {
  const [books, setBooks] = useState([]);
  const [loadingBooks, setLoadingBooks] = useState(false);
  const [error, setError] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  useEffect(() => {
    fetchBooks();
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
        <div className="flex flex-row w-full justify-between">
          <h1 className="text-xl font-bold mb-4">Biblioteca</h1>
          <DefaultButton
            onClick={() => setShowCreateModal(true)}
            text="+Agregar Libro"
          />
        </div>
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
              <BookItem key={book.id} index={index} book={book} />
            ))}
        </div>
        {!loadingBooks && !error && books.length === 0 && (
          <p>No hay libros disponibles.</p>
        )}
      </div>
      <BookModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
      />
    </>
  );
}

export default LibraryPage;
