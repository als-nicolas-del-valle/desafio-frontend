import { useState, useEffect } from "react";
import { Badge } from "../Commons";
import { DefaultButton } from "../Buttons";
import { Link } from "react-router";

import DeleteIcon from "../../assets/delete.svg";
import EditIcon from "../../assets/edit.svg";
import DefaultImage from "../../assets/default-book.jpg";

import { ModalContainer } from "../Modal";

import { useBookActions } from "../../hooks/useBookActions";

function BookItem({ book }) {
  const { id, title, authorName, available, description, image } = book;

  const [loaded, setLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [pendingDelete, setPendingDelete] = useState(false);

  const { loading, success, handleDelete } = useBookActions(id);

  useEffect(() => {
    if (pendingDelete && !loading && success) {
      setIsRemoving(true);
      setPendingDelete(false);
    }
  }, [loading, success, pendingDelete]);

  const successfulDeletion = () => {
    setPendingDelete(true);
    handleDelete(() => {});
    setShowDeleteModal(false);
  };

  return (
    <>
      <Link
        to={`/book/${id}`}
        key={id}
        onAnimationEnd={() => {
          if (isRemoving) {
            setIsHidden(true);
          }
        }}
        className={`transition-all duration-500 flex flex-row gap-4 w-full hover:brightness-110 animate__animated animate__fadeIn  ${
          isRemoving ? "animate-slideOut" : ""
        } ${isHidden ? "hidden" : ""} ${loading ? "animate-pulseTW" : ""}`}
      >
        <div className="w-48 h-64 relative">
          {!loaded && (
            <div className="w-full h-full bg-gray-300 rounded-lg animate-pulseTW" />
          )}

          <img
            className={`rounded-lg w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            src={!imageError && image ? image : DefaultImage}
            alt={title}
            onLoad={() => setLoaded(true)}
            onError={() => {
              setImageError(true);
              setLoaded(true);
            }}
          />
        </div>

        <div className="flex flex-col gap-4 border bg-gray-50 border-gray-200 shadow rounded-lg p-4 w-full">
          <div className="flex flex-row justify-between items-center">
            <span className="font-bold text-base">{title}</span>
            {available ? (
              <Badge text="Disponible" />
            ) : (
              <Badge type="danger" text="No Disponible" />
            )}
          </div>

          <p className="text-start">{description}</p>

          <div>
            <p className="text-neutral-500">-{authorName}</p>
          </div>

          <div className="flex flex-row items-end gap-4 h-full">
            <DefaultButton icon={EditIcon} text="Editar" />
            <DefaultButton
              onClick={() => setShowDeleteModal(true)}
              color="danger"
              icon={DeleteIcon}
              text="Eliminar"
              disabled={loading}
            />
          </div>
        </div>
      </Link>

      <ModalContainer
        onClose={() => setShowDeleteModal(false)}
        actionText="Eliminar"
        onAction={successfulDeletion}
        isOpen={showDeleteModal}
      >
        <span className="font-bold text-yellow-500 text-lg">Cuidado</span>
        <p>
          Estás a punto de eliminar <b>{title}</b>
        </p>
      </ModalContainer>
    </>
  );
}

export default BookItem;
