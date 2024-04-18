import todoModel from "@/models/todo";

export const createTodo = async (_: any, { item }: { item: string }) => {
  const todo = await todoModel.create({ item });
};
