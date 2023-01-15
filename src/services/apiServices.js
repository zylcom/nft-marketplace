import http from "src/http-common";

const getAllUsers = async () => {
  return await http.get("/users");
};

const getUser = async (id) => {
  return await http.get(`/users/${id}`);
};

const getAllCategory = async () => {
  return await http.get("/categories");
};

const getPostsByCategoryId = async (id) => {
  return await http.get(`/categories/${id}/posts`);
};

const getCategoryById = async (id) => {
  return await http.get(`/categories/${id}`);
};

export {
  getAllUsers,
  getUser,
  getAllCategory,
  getPostsByCategoryId,
  getCategoryById,
};
