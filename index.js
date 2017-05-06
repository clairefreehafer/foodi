const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

// app.use('/api', require('./api/app'));

app.get('/', (req, res, next) => {
	res.sendFile(path.join(__dirname, './public/index.html'));
});

// error handling middleware
app.use((err, req, res, next) => {
	console.error(err);
	res.status(err.status || 500)
	.send(err.message || 'Internal Service Error');
});

app.listen(1337, () => {
	console.log('Server is listening on port 1337!');
});


	module.exports = app;
