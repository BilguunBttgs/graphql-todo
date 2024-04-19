import { Schema, model, models } from "mongoose";

export type Todo = {
  _id: string;
  item: string;
  isCompleted: boolean;
  createdAt: Date;
};

const todoSchema = new Schema<Todo>({
  item: {
    type: String,
    // required: true,
  },
  createdAt: {
    type: Date,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});
const todoModel = models.TodoList || model<Todo>("TodoList", todoSchema);
export default todoModel;
