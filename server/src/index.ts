import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './Schema';
import cors from 'cors';
import { DataSource } from 'typeorm';
import  dotEnv from 'dotenv';
import { Users } from './Entities/Users';

dotEnv.config();
  
const main = async () => {
    const AppDataSource =  new DataSource({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: 3306,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        logging: true,
        synchronize: true,
        entities: [Users]
    });

    await AppDataSource.initialize()

    const app = express();
    app.use(cors());
    app.use(express.json());
    
    app.use("/graphql", graphqlHTTP({
        schema: schema,
        graphiql: true
    }));
    

    app.listen(3001, () => {
        console.log("Server started on port 3001");
    });
}

main().catch((err) => {
    console.log(err);
});