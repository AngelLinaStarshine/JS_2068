const express = require('express');
const app = express();

const pageRoutes = require('./routes/pages');

//reg Page Routes with app
app.use('/', pageRoutes);

//export chnages
module.exports = app;
