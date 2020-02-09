import Koa from 'koa';
import { ApolloServer } from 'apollo-server-koa';
import schema from './schema';
import resolvers from './resolvers';
import models from './models';

const server = new ApolloServer({
        typeDefs : schema,
        resolvers,
        context: async ({ req }) => {

            if (req) {
                return {
                    models
                };
            }
        }
    }
);

const app = new Koa();

server.applyMiddleware({app});

app.listen({port: 4000}, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
});