const graphql = require('graphql');
const {GraphQLList} = require("graphql/type");

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
} = graphql;

const MessageType = new GraphQLObjectType({
    name: 'Message',
    fields: () => ({
        id: { type: GraphQLID },
        message: { type: GraphQLString },
        date: { type: Date.now() },
        sender_user: {
            type: UserType,
            resolve(parent,args){
                // Will Fill
            }
        },
        receiver_user: {
            type: UserType,
            resolve(parent,args){
                // Will Fill
            }
        }
    })
});

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
    })
});