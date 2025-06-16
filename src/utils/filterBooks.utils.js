export const filterByTitleAuthorIsbn = (books, searchTerm) => {
  const lowerSearch = searchTerm.toLowerCase();
  return books.filter(
    (book) =>
      book.title.toLowerCase().includes(lowerSearch) ||
      book.authorName.toLowerCase().includes(lowerSearch) ||
      book.isbn.toLowerCase().includes(lowerSearch)
  );
};
