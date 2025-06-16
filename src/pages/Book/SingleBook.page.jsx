import { useState, useEffect } from "react";
import { DefaultButton, ModalContainer, Badge, Avatar } from "../../components";
import { useParams } from "react-router";
import { getBookById } from "../../services";

import DeleteIcon from "../../assets/delete.svg";
import EditIcon from "../../assets/edit.svg";

function BookSkeleton() {
  return (
    <div className="flex flex-col items-center gap-4 w-full animate-pulseTW">
      <div className="w-48 h-64 bg-gray-300 rounded-lg" />
      <div className="flex flex-col gap-8 w-full border border-gray-300 rounded-lg p-4">
        <div className="flex flex-row items-center justify-between">
          <div className="h-6 bg-gray-300 rounded-lg w-3/4 " />
          <div className="h-6 bg-gray-300 rounded-lg w-16" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="h-4 bg-gray-300 rounded-lg w-full" />
          <div className="h-4 bg-gray-300 rounded-lg w-full" />
          <div className="h-4 bg-gray-300 rounded-lg w-156" />
          <div className="h-4 bg-gray-300 rounded-lg w-1/2" />
        </div>
        <div className="flex flex-row gap-4">
          <div className="h-4 bg-gray-300 rounded-lg w-24" />
          <div className="h-4 bg-gray-300 rounded-lg w-24" />
        </div>
      </div>
    </div>
  );
}

function BookItem({ book }) {
  if (!book) {
    return null;
  }

  const {
    id,
    title,
    year,
    authorName,
    genre,
    available,
    description,
    image,
    author,
  } = book;
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <div key={id} className="flex flex-col items-center gap-4 w-full">
        <div className="w-48 h-64 relative">
          {!loaded && !error && (
            <div className="w-full h-full bg-gray-300 rounded-lg animate-pulseTW" />
          )}

          {!error && (
            <img
              className={`rounded-lg w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
              src={image}
              alt=""
              onLoad={() => setLoaded(true)}
              onError={() => setError(true)}
            />
          )}
        </div>
        <div className="flex flex-col gap-4 p-4 w-full">
          <div className="flex flex-row justify-between items-center">
            <span className="font-bold text-base">{title}</span>
            {available ? (
              <Badge text="Disponible" />
            ) : (
              <Badge type="danger" text="No Disponible" />
            )}
          </div>
          <p className="text-start">{description}</p>
          <div className="flex flex-row items-center gap-4 w-full">
            <Avatar url={author.image} />
            <p className="text-neutral-500">-{authorName}</p>
          </div>
          <div className="flex flex-row items-end gap-4 h-full"></div>
        </div>
      </div>
    </>
  );
}

function BookPage() {
  const [book, setBook] = useState();
  const [loadingBook, setLoadingBook] = useState(false);
  const [error, setError] = useState(null);

  let { bookId } = useParams();

  useEffect(() => {
    const fetchBooks = async () => {
      setLoadingBook(true);
      setError(null);
      try {
        const { data } = await getBookById(bookId);
        setBook(data);
      } catch (err) {
        setError("Error fetching books.");
        console.error("Error fetching books:", err);
      } finally {
        setLoadingBook(false);
      }
    };

    fetchBooks();
  }, [bookId]);

  console.log("como estas", book);

  return (
    <>
      <div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex flex-col gap-4 ">
          {loadingBook && (
            <>
              <BookSkeleton />
            </>
          )}
          {!loadingBook && !error && book && (
            <>
              <BookItem book={book} />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default BookPage;
