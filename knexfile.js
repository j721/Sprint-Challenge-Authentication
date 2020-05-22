// module.exports = {
//   development: {
//     client: 'sqlite3',
//     connection: { filename: './database/auth.db3' },
//     useNullAsDefault: true,
//     migrations: {
//       directory: './database/migrations',
//       tableName: 'dbmigrations',
//     },
//     seeds: { directory: './database/seeds' },
//   },
// };

const pgConnection = process.env.DATABASE_URL || "postgresql://postgres@localhost/food";

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/food.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: ":memory:"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

};

//connection: process.env.DATABASE_URL