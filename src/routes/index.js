// Routes index.js
const startedRouter = require('./started');
const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    app.use('/started', startedRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;
