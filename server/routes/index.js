const express = require('express');
const router = express.Router();
const noteRoutes = require('./noteRoutes');
const userRoutes = require('./userRoutes');
const labelRoutes = require('./labelRoutes');
const groupRoutes = require('./groupRoutes');
const authRoutes = require('./authRoutes');

// Routes
router.use('/auth', authRoutes)
router.use('/notes', noteRoutes);
router.use('/users', userRoutes);
router.use('/labels', labelRoutes);
router.use('/groups', groupRoutes);


module.exports = router;