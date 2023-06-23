/*
const express = require("express");
const productController = require("../controllers/product");

const router = express.Router();

// Đường dẫn và phương thức HTTP cho yêu cầu thêm sản phẩm
router.post("/", productController.addProduct);

module.exports = router;
*/

import db from "../db.js";

const addProduct = async(req, res) => {
    try {
        const { name, price } = req.body;

        // Thực hiện truy vấn để thêm sản phẩm mới vào bảng "products"
        const productId = await db("products").insert({ name, price });

        res.status(201).json({ id: productId, name, price });
    } catch (error) {
        console.error("Failed to add product:", error);
        res.status(500).json({ error: "Failed to add product" });
    }
};

export default {
    addProduct,
};