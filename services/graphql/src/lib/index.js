console.log(`Running GraphQL example...`);

// Read the query from the command line arguments
const query = process.argv[2];

const ncSchema = require('../schema');
const { graphql } = require('graphql');

// Execute the query against the defined server schema
graphql(ncSchema, query).then(result => {
	let a = JSON.parse(JSON.stringify(result));
	console.log(a);

	console.log(JSON.stringify(result));

  	//console.log(result);
});
