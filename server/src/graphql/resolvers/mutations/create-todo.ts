import todoModel from "@/models/todo";

export const createTodo = async (_: any, { item }: { item: string }) => {
  try {
    console.log("CREATE TODO WORKING", item);
    const todo = todoModel.create({ item });
    console.log("AND THE CREATE TODO RESULT IS", todo);
    return todo;
  } catch (error) {
    console.log("ERROR IN CREATE TODO", error);
  }
};
