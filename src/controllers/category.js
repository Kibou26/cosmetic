const Category = require('../models/category');

const categoryController = {
    getAllCategories: async(req, res) => {
        try {
            const categories = await Category.getAll();
            res.json(categories);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get categories' });
        }
    },

    getCategoryById: async(req, res) => {
        const { id } = req.params;
        try {
            const category = await Category.getById(id);
            if (category) {
                res.json(category);
            } else {
                res.status(404).json({ error: 'Category not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to get category' });
        }
    },

    createCategory: async(req, res) => {
        const { name } = req.body;
        try {
            await Category.create(name);
            res.json({ message: 'Category created successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to create category' });
        }
    },

    updateCategory: async(req, res) => {
        const { id } = req.params;
        const { name } = req.body;
        try {
            const updatedCount = await Category.update(id, name);
            if (updatedCount > 0) {
                res.json({ message: 'Category updated successfully' });
            } else {
                res.status(404).json({ error: 'Category not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to update category' });
        }
    },

    deleteCategory: async(req, res) => {
        const { id } = req.params;
        try {
            const deletedCount = await Category.delete(id);
            if (deletedCount > 0) {
                res.json({ message: 'Category deleted successfully' });
            } else {
                res.status(404).json({ error: 'Category not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete category' });
        }
    }
};

module.exports = categoryController;