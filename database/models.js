const Sequelize = require('sequelize');

const db = new Sequelize({
    database: '<<insert your db name here>>',
    dialect : postgres
});

// Change the function name to what you want your table name to be
const TableName = db.define('<<name>>', {
    // This will be your column names and what parameters they accept
    name : Sequelize.STRING,
    number : Sequelize.INTEGER
});

const secondTable = db.define('<<name>>',{
    name : Sequelize.STRING,
    number : Sequelize.INTEGER
});

// Creating associations to tables
TableName.hasMany(secondTable, {
    // pass in attributes here
    // EX:
    onDelete: 'cascade'
});
secondTable.belongsTo(TableName);

// exporting tables here, if more than one, use object notation
module.exports = {
    TableName,
    secondTable,
    db
}

// if only exporting one item you can do a single line export
module.exports = 'pass in one item to export '