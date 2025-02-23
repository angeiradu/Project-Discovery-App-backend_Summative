// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../config/config'); // Your config file for secret key

// Register a new user
exports.register = async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      // Check if email exists
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already in use' });
      }
  
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create user
      const user = await User.create({ name, email, password: hashedPassword });
  
      return res.status(201).json({ 
        message: 'User registered successfully', 
        user: { id: user.id, name: user.name, email: user.email } 
      });
  
    } catch (error) {
      console.error('Registration Error:', error);  // Logs full error in console
      res.status(500).json({ 
        message: 'Error registering user', 
        error: error.message || error 
      });
    }
  };

// Login a user
exports.login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid password' });
      }
  
      // Ensure JWT secret is loaded correctly from environment
      if (!config.jwtSecret) {
        return res.status(500).json({ message: 'JWT_SECRET is missing or invalid' });
      }
  
      const token = jwt.sign({ userId: user.id }, config.jwtSecret, { expiresIn: '1h' });
  
      res.status(200).json({
        success: true,
        message: 'User logged in successfully',
        data: {
          userId: user.id,
          name: user.name,
          email: user.email,
          token,
        },
      });
    } catch (error) {
      console.error('Login Error:', error);
      res.status(500).json({ message: 'Error logging in user', error: error.message || error });
    }
  };