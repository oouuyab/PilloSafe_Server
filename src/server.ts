import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import 'dotenv/config';

export const app = express();
export const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)]
});
const uri = `mongodb+srv://medicine:${process.env.MONGODB_PASSWORD}@medicine.3f0al.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority`;
mongoose.Promise = global.Promise;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('*', cors());
app.use(compression());

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = createServer(app);
httpServer.listen({ port: 8000 }, (): void => console.log(`server Start`));
