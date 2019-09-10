const knex = require('knex');

const knexFile = require('../knexfile')

const knexConfig = knexFile.development

module.exports = knex(knexConfig)

// pulled this file out of the router and can be used in multiple routers now