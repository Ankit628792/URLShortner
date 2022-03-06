const express = require('express'); // Loading Express module
const connectDB = require('./config/db');
require('dotenv').config()


// Initialize Express
const app = express();

// Connect Database
connectDB();

// Initialize JSON body parser
app.use(express.json());// Connect Database

// Add Express Port
const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('public'));


// Returns response (for testing)
app.use('/', require('./routes/redirect'));
app.use('/api/genurl', require('./routes/genurl'));

// Start Express
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));