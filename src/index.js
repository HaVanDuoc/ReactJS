// Express
const express = require('express');
const app = express();
const port = 3000;

// Morgan
const morgan = require('morgan');
app.use(morgan('combined'));

// Template engine - Handlebars
const engine = require('express-handlebars');
const path = require('path');
app.engine('hbs', engine.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Static file
app.use(express.static(path.join(__dirname, 'public')));

// node-sass
const sass = require('node-sass');

// Routes
const route = require('./routes');
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
