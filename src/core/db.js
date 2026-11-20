const { Database } = require('quickmongo');

const db = new Database('YOUR_MONGO_URI_HERE');
db.connect().then(() => console.log('[ MONGO DB ] Connected to Mongo Database!'));

module.exports = db;