import todoModel from "@/models/todo";

export const getTodos = async () => {
  const todos = await todoModel.find();
  return todos;
};
