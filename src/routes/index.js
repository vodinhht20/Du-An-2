const homeRoute = require('./home');

function route(app) {
    app.use('/', homeRoute);
}

module.exports = route;