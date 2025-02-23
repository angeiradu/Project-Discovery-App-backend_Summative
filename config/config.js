require('dotenv').config();

module.exports = {
  jwtSecret: process.env.JWT_SECRET || 'fallback-secret-key-if-missing',  // Provide a fallback secret key in case it's not loaded from .env
  database: {
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'bookstore',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
  },
};