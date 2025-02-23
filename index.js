const express = require('express');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRoutes');
const sequelize = require('./config/db');

const app = express();

// Middleware
app.use(cors()); // Enable CORS for frontend communication
app.use(express.json());

// Routes
app.use('/api/books', bookRoutes);
app.use('/api/auth', authRoutes);

// Test route
app.get('/', (req, res) => res.send('API is running...'));

// Sync database and start server
sequelize.sync({ alter: true }) // Sync database without dropping tables
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
  });

module.exports = app;