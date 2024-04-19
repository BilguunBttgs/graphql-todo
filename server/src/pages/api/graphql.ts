import { connectDb } from "@/config/_db";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { InMemoryLRUCache } from "@apollo/utils.keyvaluecache";
import { ApolloServer } from "apollo-server-cloud-functions";
import { typeDefs } from "@/graphql/schemas/todo.schema";
import { resolvers } from "@/graphql/resolvers";
import todoModel from "@/models/todo";
import { getTodos } from "@/graphql/resolvers/queries";
import { GraphQLResolverMap } from "@apollo/subgraph/dist/schema-helper";

connectDb();

const server = new ApolloServer({
  schema: buildSubgraphSchema({
    typeDefs,
    resolvers: resolvers as GraphQLResolverMap<unknown>,
    // {
    //   Query: {
    //     getTodos,
    //   },
    //   Mutation: {
    //     createTodo: async (_, { item }) => {
    //       try {
    //         const todo = await todoModel.create({ item });
    //         return todo;
    //       } catch (error) {
    //         console.log("Error in create todo", error);
    //         throw error;
    //       }
    //     },
    //   },
    // },
  }),
  introspection: true,
  csrfPrevention: true,
  cache: new InMemoryLRUCache({
    maxSize: 10000,
  }),
  context: ({ req, res }: { req: Request; res: Response }) => ({
    headers: req.headers,
    req,
    res,
  }),
});
export const config = { api: { bodyParser: false, externalResolver: true } };

const graphqlHandler = server.createHandler();

export default graphqlHandler;
