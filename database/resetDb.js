const { db } = require('./models');

const syncDb = async () => {
    await db.sync({
        force:true
    });
    process.exit();
}

syncDb();