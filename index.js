import express from 'express';
import knex from 'knex';
import db from './knexfile.js';

const app = express();

app.use(express.json());

app.post("/api/register", async(req, res) => {
    const { username, email, password, phone, address, created_at, gender } = req.body;

    try {
        // Check for duplicate email, username, and phone
        const existingUser = await db('users')
            .where('email', email)
            .orWhere('username', username)
            .orWhere('phone', phone)
            .first();

        if (existingUser) {
            // If any of the fields already exist, return an error
            return res.status(400).json({ error: 'Email, username, or phone number already in use' });
        }

        // Insert the user into the database
        await db('users').insert({ username, email, password, phone, address, created_at, gender });

        res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Failed to register user:', error);
        res.status(500).json({ error: 'Failed to register user' });
    }
});

app.post('/api/login', async(req, res) => {
    const { username, password } = req.body;

    try {
        // Retrieve the user from the database based on the username
        const user = await db('users').where('username', username).first();

        // Check if the user exists and the password is correct
        if (!user || user.password !== password) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const token = generateToken(user.id);

        res.status(200).json({ token });
    } catch (error) {
        console.error('Failed to authenticate user:', error);
        res.status(500).json({ error: 'Failed to authenticate user' });
    }
});

function generateToken(userId) {

    return 'generated_token';
}
async function startServer() {
    try {
        await db.raw('SELECT 1'); // check connect db
        console.log('Connected to the database');

        app.listen(3000, () => {
            console.log('Server started on port 3000');
        });
    } catch (error) {
        console.error('Failed to connect to the database:', error);
    }
}

startServer();