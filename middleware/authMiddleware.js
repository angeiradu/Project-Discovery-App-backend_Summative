const jwt = require('jsonwebtoken');
const config = require('../config/config'); // Make sure config contains JWT_SECRET

// Middleware to protect routes
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', ''); // Extract token from header

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  // Verify token
  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token.' });
    }
    req.user = decoded;  // Attach decoded user data to the request
    next();  // Proceed to the next middleware or route handler
  });
};

module.exports = authenticateToken;