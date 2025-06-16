import { Link } from "react-router";
import { SearchInput } from "../../components";

function NavBar({ screen = "Home" }) {
  return (
    <div className="flex flex-row items-center justify-between gap-4 bg-gray-50 border border-gray-200 shadow px-4 py-2 rounded">
      <div className="flex flex-row gap-4 items-center">
        <Link to="/books" className="hover:text-sky-700">
          Libros
        </Link>
        <Link to="/authors" className="hover:text-sky-700">
          Autores
        </Link>
      </div>
      <SearchInput placeholder="Titulo, Autor, ISBN" />
      <button>Hola</button>
    </div>
  );
}

export default NavBar;
