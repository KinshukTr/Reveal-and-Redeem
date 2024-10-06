//index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const cors = require('cors');
const dotenv = require('dotenv'); // Load dotenv package
dotenv.config(); // Load environment variables from .env file
const app = express();
const port = 3000;
const voucherRoutes = require('./routes/vouchers');

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/user_rr_project', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

// Use routes
app.use('/api', userRoutes);
app.use('/api', voucherRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

