import express, { Application } from 'express';
import { createConnection, getConnectionOptions } from 'typeorm';
export const initDatabase = async (server: Function) => {
  try {
    console.log('create connection');
    const connectionOptions = await getConnectionOptions();
    const connection = await createConnection({ ...connectionOptions });
    console.log('syncronize databse');
    await connection.synchronize();
    console.log('run migrations in databse');
    await connection.runMigrations();
    const app: Application = express();
    console.log('run server');

    await server(app);
  } catch (error) {
    console.log(error);
  }
};
