import todoModel from "@/models/todo";

export const getTodos = async () => {
  console.log("GET TODOS WORKING");
  const todos = await todoModel.find();
  return todos;
};
