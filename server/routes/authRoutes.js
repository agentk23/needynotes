// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const passport = require('../config/passport');
const jwt = require('jsonwebtoken');

router.post('/register', authController.register);
router.post('/login', authController.login);

// Google OAuth routes
router.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/login',

    }),
    (req, res) => {
        const token = jwt.sign(
            {
                userId: req.user.id,
                email: req.user.email
            },
            process.env.JWT_SECRET || 'supersecretkey',
            { expiresIn: '1h' }
        );
        res.json({token: { token }});
    }
);
module.exports = router;
