export const validateBookData = (data) => {
  const requiredFields = [
    "id",
    "title",
    "year",
    "available",
    "authorId",
    "authorName",
    "genre",
    "isbn",
    "description",
    "image",
  ];

  const missingFields = requiredFields.filter((field) => {
    const value = data[field];

    if (value === undefined || value === null || value === "") return true;

    if (typeof value === "boolean") return false;

    if (typeof value === "string" && value.trim() === "") return true;

    return false;
  });

  if (missingFields.length > 0) {
    throw new Error(`Faltan campos requeridos`);
  }
};
