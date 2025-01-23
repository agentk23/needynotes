require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models'); // referencing models/index.js
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());

// Bind routes
app.use('/api', routes);


// Sync the database (NOT recommended in production with { force: true })
sequelize.sync().then(() => {
  console.log('Database connected');
  // Start the server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Error connecting to the database: ', err);
});

module.exports = app;
