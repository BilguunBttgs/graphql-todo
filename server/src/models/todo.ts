import { Schema, model } from "mongoose";

export type Todo = {
  _id: string;
  item: string;
  isCompleted: boolean;
  createdAt: Date;
};

const todoSchema = new Schema<Todo>({
  item: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});
const todoModel = model<Todo>("TodoList", todoSchema);
export default todoModel;
