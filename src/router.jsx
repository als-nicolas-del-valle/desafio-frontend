import { Routes, Route } from "react-router";
import { LibraryPage, BookPage, AuthorsPage } from "./pages";

function Router() {
  return (
    <Routes>
      <Route path="/books" element={<LibraryPage />} />
      <Route path="/book/:bookId" element={<BookPage />} />
      <Route path="/authors" element={<AuthorsPage />} />
    </Routes>
  );
}

export default Router;
