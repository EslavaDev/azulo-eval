const fs = require("fs");
module.exports = {
  type: process.env.DB_CLIENT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  synchronize: false,
  logging: false,
  entities: [process.env.ENTITIES_DIR],
  cli: {
    entitiesDir: process.env.CLI_ENTITIES_DIR,
  },
  name: "default",
  synchronize: true,
  insecureAuth: true,
  extra: { insecureAuth: true },
};
