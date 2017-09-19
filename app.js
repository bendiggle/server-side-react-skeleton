'use strict';

const express = require('express');
const engines = require('consolidate');
const app = express();

app.set('views', __dirname + '/app/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.use('/dist', express.static(`${__dirname}/dist`));

app.get('/', (req, res) => {
    res.render('index.html');
});

app.listen(3000, () => {
    console.log('App started on PORT 3000')
});
