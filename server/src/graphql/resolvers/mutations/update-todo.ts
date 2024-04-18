import todoModel from "@/models/todo";

interface IUpdateTodo {
  _id: string;
  item: string;
  isCompleted: boolean;
}

export const updateTodo = async (
  _: any,
  { _id, item, isCompleted }: IUpdateTodo
) => {
  const todo = await todoModel.findByIdAndUpdate(_id, {
    item,
    isCompleted: isCompleted,
  });
};
