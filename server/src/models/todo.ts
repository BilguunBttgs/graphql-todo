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
    default: Date.now,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});
const todoModel = model<Todo>("Todo", todoSchema);
export default todoModel;
