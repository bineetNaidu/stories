import 'reflect-metadata';
import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/Hello';
import { connectDb } from './configs/connectDb';
import { UserResolver } from './resolvers/users';

dotenv.config();

const bootstrap = async () => {
  try {
    const server = new ApolloServer({
      schema: await buildSchema({
        validate: false,
        resolvers: [HelloResolver, UserResolver],
      }),
    });

    await connectDb();
    server.listen().then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

bootstrap();
