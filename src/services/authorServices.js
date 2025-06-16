import axiosInstance from "../config/axios";

async function getAuthors() {
  try {
    const authors = await axiosInstance.get("/authors");

    return authors;
  } catch (error) {
    console.error(error);
  }
}

export { getAuthors };
