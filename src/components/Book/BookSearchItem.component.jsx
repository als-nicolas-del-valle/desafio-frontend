import { Icon } from "../Commons";

import { Link } from "react-router";

import BookIcon from "../../assets/book.svg";

function BookSearchItem({ book, onClick }) {
  const { id, title, authorName, isbn, available } = book;
  console.log("deesde el libro", book);

  return (
    <Link
      to={`/book/${id}`}
      onClick={onClick}
      className="flex flex-row gap-2 w-full py-1 px-2 hover:bg-sky-100 transition rounded-md"
    >
      <Icon className="w-[48px]" url={BookIcon} />
      <div className="flex flex-col w-full">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-2">
            <span className="font-bold text-base">{title}</span>

            <span className="font-light text-xs text-gray-400">
              -{authorName}
            </span>
          </div>
          {available ? (
            <span className="font-light text-xs text-green-400">
              Disponible
            </span>
          ) : (
            <span className="font-light text-xs text-red-400">
              No Disponible
            </span>
          )}
        </div>
        <span className="font-light text-xs text-gray-600">{isbn}</span>
      </div>
    </Link>
  );
}

export default BookSearchItem;
