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


module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/users.db3",
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
  testing: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: ":memory:",
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};