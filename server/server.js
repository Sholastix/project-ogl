require('dotenv').config()
const bodyParser = require('body-parser');
// const cors = require('cors');
const express = require('express');

const createDatabase = require('./config/createDatabase');
const database = require('./config/initializeDatabase');

const app = express();
app.use(bodyParser.json());

// // Сross-origin resource sharing permission.
// app.use(cors());

// Synchronization with DB, if success -> server starts.
(async () => {
    try {
        await createDatabase();
        await database.sync();
        app.listen(process.env.APP_PORT, () => {
            console.log(`Server listening on port ${process.env.APP_PORT}.`);
        });
    } catch (err) {
        console.error(`Connection failed at port: ${process.env.APP_PORT}`, err);
    };
})();