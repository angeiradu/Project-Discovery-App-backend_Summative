const Book = require('../models/Book');

// Create a new book
exports.createBook = async (req, res) => {
    try {
      const book = await Book.create(req.body);
      console.log('Book Created:', book);  // Debugging line
      res.status(201).json({
        success: true,
        message: 'Book created successfully',
        data: book
      });
    } catch (error) {
      console.error('Error creating book:', error);  // Debugging line
      res.status(400).json({ message: 'Error creating book', error });
    }
  };

// Get all books

exports.getAllBooks = async (req, res) => {
    try {
      const books = await Book.findAll();  // Ensure this is the correct model method
      res.status(200).json({
        success: true,
        message: 'Books retrieved successfully',
        data: books
      });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching books', error });
    }
  };

// Get a single book by ID
exports.getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({
      success: true,
      message: 'Book retrieved successfully',
      data: book
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching book', error });
  }
};

// Update a book
exports.updateBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    await book.update(req.body);
    res.status(200).json({
      success: true,
      message: 'Book updated successfully',
      data: book
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating book', error });
  }
};

// Delete a book
exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    await book.destroy();
    res.status(200).json({  // Changed from 204 to 200
      success: true,
      message: 'Book deleted successfully'
    });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book', error });
  }
};