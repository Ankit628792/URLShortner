const mongoose = require('mongoose'); // Loading Mongoose module
const config = require('config'); // Loading config module

const db = config.get('mongouri'); // Fetching MongoDB URL from config.json

// Function to Connect MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(db);
        console.log('Database Connected Successfully...');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB; // Exporting module so that we can import it on index.js