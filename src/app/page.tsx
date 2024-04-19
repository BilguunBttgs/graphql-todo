"use client";
import DoneTodo from "@/components/doneTodo";
import OneTodo from "@/components/oneTodo";
import TodoInput from "@/components/todoInput";
import { gql, useQuery } from "@apollo/client";
import Image from "next/image";

export default function Home() {
  const GET_TODOS = gql`
    query GET_TODOS {
      getTodos {
        _id
        item
        isCompleted
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_TODOS);
  console.log("DATA", data);
  return (
    <main className="w-screen h-screen bg-[#0C0714] flex justify-center items-center text-white">
      <div className="bg-[#1d1825] w-[500px] h-[700px] rounded-xl p-10">
        <TodoInput />
        <div className="mt-8">
          <h2>Task to do - 4</h2>
          {data.getTodos?.map((todo) => (
            <OneTodo todo={todo} />
          ))}
        </div>
        <div className="mt-8">
          <h2>Done - 1</h2>
          <DoneTodo />
        </div>
      </div>
    </main>
  );
}
