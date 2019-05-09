// importing the tables we created in models.js
// if exported as an object you must destructure them
const { TableName, secondTable  } = require('./models');

const seedDB = async () => {
    // clearing the tables before adding more data
    await TableName.destroy({
        where:{}
    });

    await secondTable.destroy({
        where:{}
    });

    // creating columns in the database tables
    const someItem = await TableName.create({
        columnName: '<<pass in what value you want to add to the table>>'
    });

    const anotherItem = await secondTable.create({
        columnName: '<<Pass In Value Here>>'
    })

    // creating an association to each the parent table
    await anotherItem.setTableName(someItem);
};

seedDB();