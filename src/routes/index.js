const HomeRoute = require('./home');

function route(app) {
    app.use('/', HomeRoute);
}
module.exports = route;