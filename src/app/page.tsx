"use client";
import DoneTodo from "@/components/doneTodo";
import OneTodo from "@/components/oneTodo";
import TodoInput from "@/components/todoInput";
import { gql, useMutation, useQuery } from "@apollo/client";
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
  const CREATE_TODO = gql`
    mutation CreateTodo($item: String!) {
      createTodo(item: $item) {
        _id
        item
        isCompleted
      }
    }
  `;
  const DELETE_TODO = gql`
    mutation DeleteTodo($id: ID!) {
      deleteTodo(_id: $id) {
        _id
        item
        isCompleted
      }
    }
  `;
  const UPDATE_TODO = gql`
    mutation UpdateTodo($_id: ID!, $isCompleted: Boolean!) {
      updateTodo(_id: $_id, isCompleted: $isCompleted) {
        _id
        isCompleted
        item
      }
    }
  `;
  const { loading, error, data, refetch } = useQuery(GET_TODOS);
  const [updateTodo, _] = useMutation(UPDATE_TODO);
  const handleUpdate = async (id: string) => {
    await updateTodo({ variables: { _id: id, isCompleted: true } });
    await refetch();
  };
  return (
    <main className="w-screen h-screen bg-[#0C0714] flex justify-center items-center text-white">
      <div className="bg-[#1d1825] w-[500px] h-[700px] rounded-xl p-10">
        <TodoInput CREATE_TODO={CREATE_TODO} refetch={refetch} />
        <div className="mt-8 h-[300px] overflow-scroll">
          <h2>
            Task to do -{" "}
            {
              data?.getTodos?.filter((todo: any) => todo.isCompleted === false)
                .length
            }
          </h2>
          {data?.getTodos
            ?.filter((todo: any) => todo.isCompleted === false)
            .map((todo: any) => (
              <OneTodo
                key={todo._id}
                todo={todo}
                DELETE_TODO={DELETE_TODO}
                handleUpdate={handleUpdate}
                refetch={refetch}
              />
            ))}
        </div>
        <div className="mt-8">
          <h2>
            Done -{" "}
            {
              data?.getTodos?.filter((todo: any) => todo.isCompleted === true)
                .length
            }
          </h2>
          {data?.getTodos
            ?.filter((todo: any) => todo.isCompleted === true)
            ?.map((todo: any) => (
              <DoneTodo todo={todo} />
            ))}
        </div>
      </div>
    </main>
  );
}
