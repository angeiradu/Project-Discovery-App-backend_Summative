const express = require('express');
const bookController = require('../controllers/bookController');
const authenticateToken = require('../middleware/authMiddleware'); // Import authentication middleware

const router = express.Router();

// Create a new book (protected)
router.post('/', authenticateToken, bookController.createBook);

// Get all books (protected)
router.get('/', authenticateToken, bookController.getAllBooks);

// Get a single book by ID (protected)
router.get('/:id', authenticateToken, bookController.getBookById);

// Update a book (protected)
router.put('/:id', authenticateToken, bookController.updateBook);

// Delete a book (protected)
router.delete('/:id', authenticateToken, bookController.deleteBook);

module.exports = router;