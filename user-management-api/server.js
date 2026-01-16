require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('User Management API is running');
});

// Error handling middleware
// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  
  // If headers were already sent, delegate to the default Express error handler
  if (res.headersSent) {
    return next(err);
  }

  res.status(500).json({
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong!'
  });
});

const PORT = process.env.PORT || 3000;

// Only start the server if we're not in test environment
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
}

module.exports = app; // For testing purposes
