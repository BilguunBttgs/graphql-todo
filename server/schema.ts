export const typeDefs = `#graphql
    type Todo {
        id:ID!,
        item: String!,
        completed: Boolean!
    }
    type Query{
        Todos: [Todo]
    }
`;
