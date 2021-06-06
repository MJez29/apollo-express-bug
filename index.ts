import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
import express from "express";

const server = new ApolloServer({
  schema: makeExecutableSchema({
    typeDefs: ""
  })
});

const app = express();

server.applyMiddleware({ app });