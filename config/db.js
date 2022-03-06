const mongoose = require('mongoose'); // Loading Mongoose module
require('dotenv').config()

const db = process.env.MONGODB_URI; // Fetching MongoDB URL from config.json

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