const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.js');

// Định nghĩa các route cho category
router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);
router.post('/', categoryController.createCategory);
router.put('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;