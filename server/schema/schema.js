const graphql = require('graphql');
const _ = require('lodash')

const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema,
    GraphQLID
 } = graphql;

let books = [
    {name: 'Manga', id: '1'},
    {name: 'Comic', id: '2'},
    {name: 'Web Toon', id: '3'}
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: {type: GraphQLID} },
            resolve(parent, args) {
                // code to get data from dv / other source"
                return _.find(books, {id: args.id})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})