import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';
import 'dotenv/config';

export const app = express();
export const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)]
});

app.use('*', cors());
app.use(compression());

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = createServer(app);
httpServer.listen({ port: process.env.PORT }, (): void => console.log(`server Start`));
