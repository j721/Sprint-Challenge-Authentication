
const bcrypt = require("bcryptjs");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "roger",
          password: bcrypt.hashSync("dogs", 4),
        },
        {
          username: "cats",
          password: bcrypt.hashSync("pet", 4),
        },
        {
          username: "sky",
          password: bcrypt.hashSync("blue", 4),
        },
      ]);
    });
};
