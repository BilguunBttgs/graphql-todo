import todoModel from "@/models/todo";

export const deleteTodo = async (_: any, { _id }: { _id: string }) => {
  const todo = await todoModel.findByIdAndDelete(_id);
};
