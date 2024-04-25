import todoModel from "@/models/todo";

interface IUpdateTodo {
  _id: string;
  item: string;
  isCompleted: boolean;
}

export const updateTodo = async (_: any, { _id, isCompleted }: IUpdateTodo) => {
  console.log("UPDATE TODO WORKING");
  const todo = await todoModel.findByIdAndUpdate(_id, {
    isCompleted: isCompleted,
  });
  return todo;
};
