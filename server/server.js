require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models'); // referencing models/index.js
const routes = require('./routes');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
app.use(cors());
app.use(express.json());
app.use(authMiddleware);


// Bind routes
app.use('/', routes);

// Sync the database (NOT recommended in production with { force: true })
sequelize.sync().then(() => {
  console.log('Database connected');
  // Start the server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Error connecting to the database: ', err);
});

module.exports = app;
