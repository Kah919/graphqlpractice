const express = require('express');
const { graphqlHTTP } = require('express-graphql'); // lets express understand graphQL
const port = 4000;
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

// allow cross-origin requests
app.use(cors());

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://kah:kah@cluster0.bdyfn.mongodb.net/GraphQLBooksPracticee?retryWrites=true&w=majority')
mongoose.connection.once('open', () => {
    console.log('connected to database')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true // lets us see the graphiql tool on our localhost
}));

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});