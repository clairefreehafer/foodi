/** express used for routing */
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/** serve up static files */
app.use(express.static('public'));

/** send index.html on root URL request */
app.get('/', (req, res, next) => {
	res.sendFile(path.join(__dirname, './public/index.html'));
});

/** error-handling middleware */
app.use((err, req, res, next) => {
	console.error(err);
	res.status(err.status || 500)
	.send(err.message || 'Internal Service Error');
});

/** start the server */
app.listen(1337, () => {
	console.log('Navigate to localhost:1337 to find some food!');
});

module.exports = app;
