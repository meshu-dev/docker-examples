'use strict';

const express = require('express');
const graphqlHTTP = require('express-graphql');

const ncSchema = require('./schema');

// App
const app = express();

app.use('/', graphqlHTTP({
	schema: ncSchema,
	graphiql: true
}));

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
