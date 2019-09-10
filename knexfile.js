// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true, // used for sqlite
    connection: {
      filename: './data/produce.db3'
    }
  }
};
