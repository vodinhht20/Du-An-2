const express = require('express');
const handlebar = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', handlebar({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));


route(app);
app.listen(port);