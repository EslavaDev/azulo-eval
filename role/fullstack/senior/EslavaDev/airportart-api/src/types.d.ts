import { Knex } from "knex";

export {};
declare global {
    namespace Express {
      interface Request {
        database: Knex<any, unknown[]>;
      }
    }
  }