const bcrypt = require('bcrypt');
const { User } = require('../models');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        console.log(req);
        console.log(req.body);


        // 1. Check if user already exists
        try {
            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                return res.status(400).json({ message: 'Email already registered' });
            } else {
                const existingUser = await User.findOne({ where: { username } });
                if (existingUser) {
                    return res.status(400).json({ message: 'Username already registered' });
                }
            }
        } catch (error) {
            console.log(error);
        }


        // 2. Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        
        // 3. Create user
        const newUser = await User.create({
            username: username,
            email: email,
            password: hashedPassword
        });

        res.status(201).json({ message: 'User registered successfully', user: { id: newUser.id, email: newUser.email } });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Check if user exists
        const user = await User.findOne({ where: { email: email } });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // 2. Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // 3. Generate JWT
        // Typically, you store the SECRET in your .env file
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET || 'supersecretkey',
            { expiresIn: '1h' }
        );

        res.json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};
