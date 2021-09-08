const HomeRoute = require('./home');
const AdminProduct = require('./adminProduct');
const Search = require('./search');
const account = require('./account');

function route(app) {
    app.use('/', HomeRoute);
    app.use('/admin', AdminProduct);
    app.use('/search', Search);
    app.use('/account', account);
}
module.exports = route;