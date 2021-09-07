const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

// Load env vars
dotenv.config({ path: './config/config.env'});

// Connect to database
connectDB();

// Route files
const essences = require('./routes/essences');
const chakras = require('./routes/chakras');
const meridians = require('./routes/meridians');
const elements = require('./routes/elements');
const references = require('./routes/references');
const groupInfo = require('./routes/groupInfo');
const auth = require('./routes/auth');
const medicines = require('./routes/medicines');

const app = express();

// Allows CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Mount routers
app.use('/api/v1/essences', essences);
app.use('/api/v1/chakras', chakras);
app.use('/api/v1/meridians', meridians);
app.use('/api/v1/elements', elements);
app.use('/api/v1/references', references);
app.use('/api/v1/groupinfo', groupInfo);
app.use('/api/v1/auth', auth);
app.use('/api/v1/medicines', medicines);

// Error handler middleware - define error-handling middleware last, after other app.use() and routes calls
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.cyan.bold));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});