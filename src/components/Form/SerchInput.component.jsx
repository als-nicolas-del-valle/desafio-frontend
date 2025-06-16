import { useSearchHistory } from "../../store/searchHistory/SearchHistory.store";
import { DefaultButton } from "../Buttons";
import Input from "./Input.component";
import { useEffect, useState } from "react";
import SearchIcon from "../../assets/MaterialSymbolsSearch.svg";
import { BookSearchItem } from "../Book";
import { useSearch } from "../../hooks/useSearch";
import { SearchHistoryItem, Spinner } from "../Commons";

function SearchResultsList({ results, loading = true, onClick }) {
  return (
    <>
      {loading ? (
        <div className="w-full p-8">
          <Spinner />
        </div>
      ) : results.length ? (
        <div className="flex flex-col">
          {results.map((book) => (
            <BookSearchItem onClick={onClick} key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center py-4 w-full text-sm text-gray-400 font-light">
          No hay libros que mostrar
        </div>
      )}
    </>
  );
}

function SearchInput({ value = "", onSearch, onBlur = () => {}, ...props }) {
  const [focused, setFocused] = useState(false);
  const [seaching, setSeaching] = useState(false);
  const [showSerchHistory, setShowSerchHistory] = useState(false);
  const [searchParam, setSearchParam] = useState(value);

  const { results, loading } = useSearch(searchParam);

  const handleAddSearchTerm = useSearchHistory((state) => state.addSearchTerm);

  const handleBlur = () => {
    setTimeout(() => {
      setFocused(false);
      if (searchParam.trim()) {
        handleAddSearchTerm(searchParam.trim());
        onBlur(searchParam);
      }
    }, 300);
  };

  useEffect(() => {
    if (searchParam.trim().length >= 2) {
      if (!focused) {
        console.log("guardar en el historial");
      }
    }
  }, [searchParam, focused]);

  return (
    <div className="flex flex-row items-center gap-2 max-w-3xl w-full relative ">
      <div className="max-w-3xl w-full relative ">
        <Input
          value={searchParam}
          onFocus={() => setFocused(true)}
          onBlur={handleBlur}
          onChange={(e) => setSearchParam(e.target.value)}
          {...props}
        />

        {focused && (
          <div className="felx flex-col gap-2 absolute z-9 bg-gray-50 w-full p-2 border border-neutral-300 rounded-xl animate__animated animate__fadeIn animate__faster">
            <SearchHistoryItem term="naaaaaa" />
            <SearchHistoryItem term="hellll" />
            <SearchHistoryItem term="naaaaaa" />
            {searchParam.trim().length >= 2 ? (
              <>
                <hr className="my-2" />
                <SearchResultsList
                  onClick={() => setFocused(false)}
                  loading={loading}
                  results={results}
                />
              </>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchInput;
