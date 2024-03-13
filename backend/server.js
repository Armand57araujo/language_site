const PORT = process.env.PORT || 5000;

const mongoose = require('mongoose');
const config = require('./config/config');
const routes = require('./routes');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB
const db = require('./config/connection');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

db.once('open', () => {

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
});