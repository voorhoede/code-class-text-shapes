'use strict';

const express = require('express');
const path = require('path');
const paths = require('./lib/paths');
const renderer = require('./lib/renderer');

const app = express();
const port = 3000;

// Expose static folder on root path
app.use('/', express.static(paths.static));

// Default get requests
app.get('/:page', (req, res) => {
	const templatePath = path.join('views', `${req.params.page}/${req.params.page}.html`);
	res.send(renderer.render(templatePath));
});

// Redirect root to index page
app.get('/', (req, res) => res.redirect('/index'));

app.listen(port, function () {
	console.log('Development server available on http://localhost:' + port);
});