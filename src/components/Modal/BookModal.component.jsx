import ModalContainer from "./ModalContainer.component";
import Input from "../Form/Input.component";
import { DefaultButton } from "../Buttons";
import { useBookActions } from "../../hooks/useBookActions";

function BookModal({ isOpen, onClose }) {
  const { loading, error, bookData, handleForm, handleCreate, resetStatus } =
    useBookActions();

  return (
    <ModalContainer isOpen={isOpen}>
      <form className="flex flex-col gap-2">
        <Input
          type="number"
          name="id"
          value={bookData.id}
          onChange={handleForm}
          placeholder="ID*"
          required
        />

        <Input
          type="text"
          name="title"
          value={bookData.title}
          onChange={handleForm}
          placeholder="Título*"
          required
        />
        <Input
          type="number"
          name="year"
          value={bookData.year}
          onChange={handleForm}
          placeholder="Año*"
          required
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="available"
            checked={bookData.available}
            onChange={handleForm}
          />
          Disponible
        </label>
        <Input
          type="number"
          name="authorId"
          value={bookData.authorId}
          onChange={handleForm}
          placeholder="ID del Autor*"
          required
        />
        <Input
          type="text"
          name="authorName"
          value={bookData.authorName}
          onChange={handleForm}
          placeholder="Nombre del Autor*"
          required
        />
        <Input
          type="text"
          name="genre"
          value={bookData.genre}
          onChange={handleForm}
          placeholder="Género*"
          required
        />
        <Input
          type="text"
          name="isbn"
          value={bookData.isbn}
          onChange={handleForm}
          placeholder="ISBN*"
          required
        />
        <textarea
          className="flex-grow outline-none bg-transparent text-gray-800 placeholder-gray-400 p-2 focus:bg-gray-100"
          name="description"
          value={bookData.description}
          onChange={handleForm}
          placeholder="Descripción*"
          rows="3"
          required
        />
        <Input
          type="text"
          name="image"
          value={bookData.image}
          onChange={handleForm}
          placeholder="URL de imagen"
          required
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className=" flex flex-row justify-between gap-4 mt-2">
          <DefaultButton color="secondary" onClick={onClose} text="Cancelar" />

          <DefaultButton
            type="submit"
            text="Guardar libro"
            onClick={() => handleCreate(onClose)}
            disabled={loading}
          />
        </div>
      </form>
    </ModalContainer>
  );
}

export default BookModal;
