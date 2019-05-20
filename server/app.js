const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const http = require('http');
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static middleware
app.use(express.static(path.join(__dirname,"..", '')));


const routes = require('../routes/router.js');

app.use('/', routes);


//Start server
server.listen(process.env.PORT || PORT, () => {
	console.log('Server is live on PORT:', PORT);
});

