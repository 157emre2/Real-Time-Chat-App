
const graphql = require('graphql');
const { GraphQLList } = require("graphql/type");
const Message = require('../models/message');
const User = require('../models/user');
const Chat = require('../models/chat');
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
        date: { type: GraphQLString },
        sender_user: {
            type: UserType,
            resolve(parent,args){
                return User.findById(parent.senderId);
            }
        },
        receiver_chat: {
            type: ChatType,
            resolve(parent,args){
                return Chat.findById(parent.receiverId);
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
        password: { type: GraphQLString },
        email: { type: GraphQLString },
    })
});

const ChatType = new GraphQLObjectType({
   name: 'Chat',
   fields: () => ({
       id: { type: GraphQLID },
       title: { type: GraphQLString },
       chat_type: { type: GraphQLString },
       users: {
           type: new GraphQLList(UserType),
           resolve(parent,args){
               return User.find({chatId: {$in: [parent.id]}});
           }
       },
       messages: {
           type: new GraphQLList(MessageType),
           resolve(parent, args){
               return Message.find({receiverId: parent.id});
           }
       },
       lastMessage: {
           type: MessageType,
           resolve(parent,args){
               return Message.findById(parent.lastMessageId);
           }
       },
       createdAt: { type: GraphQLString },
   })
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        // Chats, Messages in chat, Users in chat, Message, User, Search (User, Message, Chat)
        chats: {
            type: new GraphQLList(ChatType),
            args: { userId: { type: GraphQLID}},
            resolve(parent,args){
                return Chat.find({usersId: {$in: [args.userId]}});
            }
        },
        chat: {
            type: ChatType,
            args: { id: {type: GraphQLID}},
            resolve(parent, args){
                return Chat.findById(args.id);
            }
        },
        messages_in_chat: {
            type: new GraphQLList(MessageType),
            args: { chatId: {type: GraphQLID }},
            resolve(parent, args){
                return Message.find({receiverId: args.chatId});
            }
        },
        message: {
            type: MessageType,
            args: {id: {type: GraphQLID}},
            resolve(parent,args){
                return Message.findById(args.id);
            }
        }
    }
});