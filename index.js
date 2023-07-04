import express from 'express';
import db from './src/database/knexfile.js';
import authRoutes from './src/routes/authRoutes.js';
import categoryRoutes from './src/models/category.js';

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes); // Sử dụng authRoutes như một tuyến đường riêng
app.use('/api/categories', categoryRoutes);

async function startServer() {
    try {
        await db.raw('SELECT 1'); // Kiểm tra kết nối db
        console.log('Connected to the database');

        app.listen(3000, () => {
            console.log('Server started on port 3000');
        });
    } catch (error) {
        console.error('Failed to connect to the database:', error);
    }
}

startServer();