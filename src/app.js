const express = require('express');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(express.json());
app.use('/user', userRoutes);

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
});

module.exports = app;