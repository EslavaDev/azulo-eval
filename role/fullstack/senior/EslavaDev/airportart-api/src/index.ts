import dotenv from "dotenv";
dotenv.config();
import 'reflect-metadata';
import { initServer } from './server';
import { initDatabase } from './database';

const init = async () => {
  try {
    await initDatabase(initServer);
  } catch (error) {
    console.log(error);
  }
};

init();
