import express from 'express';
import engines from 'consolidate';
import React from 'react';
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import routes from './app/routes';

const app = express();

app.set('views', __dirname + '/app/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.use('/dist', express.static(`${__dirname}/dist`));

app.get('*', (req, res) => {
    let context = {};
    const content = renderToString(
        <StaticRouter location={req.url} context={context}>
            {renderRoutes(routes)}
        </StaticRouter>
    );
    res.render('index', {title: 'Express', data: false, content });
});

app.listen(3000, () => {
    console.log('App started on PORT 3000');
});
