import { useState } from "react";
import { deleteBook, postBook } from "../services";

export function useBookActions(bookId) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [bookData, setBookData] = useState({
    id: "",
    title: "",
    year: "",
    available: false,
    authorId: "",
    authorName: "",
    genre: "",
    isbn: "",
    description: "",
    image: "",
  });

  const resetStatus = () => {
    setError(null);
    setSuccess(null);
  };

  const handleDelete = async (callback = () => {}) => {
    resetStatus();
    setLoading(true);

    try {
      const response = await deleteBook(bookId);
      if (response.success) {
        setSuccess("Libro eliminado correctamente.");
      }
    } catch (err) {
      setError("Error al eliminar el libro.");
      console.error(err);
    } finally {
      setLoading(false);
      callback();
    }
  };

  /*  const handleEdit = async (updatedData) => {
    resetStatus();
    setLoading(true);

    try {
      await editBook(bookId, updatedData);
      setSuccess("Libro actualizado correctamente.");
    } catch (err) {
      setError("Error al editar el libro.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }; */

  const handleForm = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;

    setBookData((prev) => ({
      ...prev,
      [name]: val,
    }));
  };

  const handleCreate = async (callback) => {
    resetStatus();
    setLoading(true);
    try {
      const result = await postBook({
        ...bookData,
        id: Number(bookData.id),
        year: Number(bookData.year),
        authorId: Number(bookData.authorId),
      });

      if (result.success) {
        callback();
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError("Error inesperado.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    success,
    bookData,
    handleDelete,
    handleForm,
    handleCreate,
    resetStatus,
    //handleEdit,
  };
}
