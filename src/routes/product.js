const db = require("../db"); // Knex instance

// Hàm thêm sản phẩm
exports.addProduct = async(req, res) => {
    try {
        const { name, price } = req.body;
        await db("products").insert({ name, price });
        res.status(201).json({ message: "Product created successfully" });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ error: "Failed to create product" });
    }
};