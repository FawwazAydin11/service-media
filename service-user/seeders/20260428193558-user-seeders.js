'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      name: "budi",
      profession: "admin",
      role: "admin",
      email: "budigmail.com",
      password: await bcrypt.hash('12345678', 10),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: "dimas",
      profession: "student",
      role: "student",
      email: "dimasgmail.com",
      password: await bcrypt.hash('12345678', 10),
      created_at: new Date(),
      updated_at: new Date(),
    }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
