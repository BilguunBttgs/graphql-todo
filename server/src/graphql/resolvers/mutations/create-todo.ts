import todoModel from "@/models/todo";
import { todo } from "node:test";

export const createTodo = async (_: any, { item }: { item: string }) => {
  try {
    const todo = new todoModel({ item });
    return todo;
  } catch (error) {
    console.log("ERROR IN CREATE TODO", error);
    return todo;
  }
};
