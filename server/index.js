import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer, gql } from 'apollo-server-express';

import schema from './schema';
import resolvers from './resolvers';
import models from './models';

// mongoose.connect('mongodb://localhost:27017/local')
//
// const db = mongoose.connection;
// db.on('error', ()=> {console.log( '---FAILED to connect to mongoose')})
// db.once('open', () => {
//  console.log( '+++Connected to mongoose')
// });

const server = new ApolloServer({ 
  typeDefs: schema,
  resolvers,
  formatError: error => {
    return {
      ...error
    };
  },
  context: async ({ req, connection }) => {
    if (connection) {
      console.log("connection");
      return {
        models
      };
    }

    if (req) {
      console.log("req");
      return {
        models
      };
    }
  }
 });

const app = express();
server.applyMiddleware({ app });

const port = 4000;

app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),
);