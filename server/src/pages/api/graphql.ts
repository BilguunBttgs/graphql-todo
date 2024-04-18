import { connectDb } from "@/config/_db";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { InMemoryLRUCache } from "@apollo/utils.keyvaluecache";
import { ApolloServer } from "apollo-server-cloud-functions";
import { typeDefs } from "@/graphql/schemas/todo.schema";
import { resolvers } from "@/graphql/resolvers";

connectDb();

const server = new ApolloServer({
  schema: buildSubgraphSchema({
    typeDefs,
    resolvers,
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
