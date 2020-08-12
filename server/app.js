const express = require('express');
const { graphqlHTTP } = require('express-graphql'); // lets express understand graphQL
const app = express();
const port = 4000;

app.use('/graphql', graphqlHTTP({

}));

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});