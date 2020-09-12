const express = require('express');
const { graphqlHTTP } = require('express-graphql'); // lets express understand graphQL
const app = express();
const port = 4000;
const schema = require('./schema/schema');

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true // lets us see the graphiql tool on our localhost
}));

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});