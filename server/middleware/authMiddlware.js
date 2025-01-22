// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
  // 1. Get the auth header
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }

  // 2. Split the header to get the token
  const [scheme, token] = authHeader.split(' ');
  if (scheme !== 'Bearer' || !token) {
    return res.status(401).json({ message: 'Invalid authorization format' });
  }

  // 3. Verify the token
  jwt.verify(token, process.env.JWT_SECRET || 'supersecretkey', (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Failed to authenticate token' });
    }
    // 4. Attach the decoded payload to request object
    req.user = decoded; // { userId, email, iat, exp }
    // 5. Proceed
    next();
  });
};
