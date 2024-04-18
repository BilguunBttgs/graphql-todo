import { gql } from "apollo-server-cloud-functions";

export const typeDefs = gql`
  type Todo {
    _id: ID!
    item: String!
    isCompleted: Boolean!
    createdAt: String!
  }

  type Query {
    getTodos: [Todo!]!
  }

  type Mutation {
    createTodo(item: String!): Todo!
    updateTodo(_id: ID!): Todo!
    deleteTodo(_id: ID!): Todo!
  }
`;
