const graphql = require('graphql');
const Message = require('../models/message');
const User = require('../models/user');
const Chat = require('../models/chat');
const { PubSub} = require('graphql-subscriptions');
const pubsub = new PubSub();
const bcyrpt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull
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

const AuthPayload = new GraphQLObjectType({
   name: 'AuthPayload',
   fields: () => ({
       token: { type: GraphQLString },
       user: { type: UserType }
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
        },
        messages: {
            type: new GraphQLList(MessageType),
            resolve(parent,args){
                return Message.find();
            }
        },
        user: {
            type: UserType,
            args: { id: { type: GraphQLID}},
            resolve(parent,args){
                return User.findById(args.id);
            }
        },
        userSearch: {
          type: UserType,
          args: { username: { type: GraphQLString }},
          resolve(parent,args){
              return User.findOne({username: args.username});
          }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent,args){
                return User.find();
            }
        }
        //Search Queries will add
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        //Add-Update-Delete User Mutations
        addUser: {
            type: UserType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                username: { type: new GraphQLNonNull(GraphQLString)},
                password: { type: new GraphQLNonNull(GraphQLString)},
                email: { type: new GraphQLNonNull(GraphQLString)}
            },
            async resolve(parent,args){
                try{
                    const hashedPassword = await bcyrpt.hash(args.password,10);

                    const user = new User({
                        name: args.name,
                        username: args.username,
                        email: args.email,
                        password: hashedPassword
                    });

                    user.save().then(() => {
                        pubsub.publish('userAdded', {userAdded: user});
                    });

                    return user;
                } catch (err) {
                    console.log(err);
                }
            }
        },
        updateUser: {
            type: UserType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLID)},
                name: { type: GraphQLString },
                username: { type: GraphQLString },
                password: { type: GraphQLString },
                email: { type: GraphQLString }
            },
            async resolve(parent, args){
                try {
                    const hshpw = await bcyrpt.hash(args.password, saltRounds);

                    return User.findByIdAndUpdate(args.id, {
                        name: args.name,
                        username: args.username,
                        password: hshpw,
                        email: args.email
                    }, {new: true});
                }catch (err) {
                    console.log(err)
                }
            }
        },
        deleteUser: {
            type: UserType,
            args: { id: {type: new GraphQLNonNull(GraphQLID)}},
            resolve(parent, args){
                return User.findByIdAndDelete(args.id);
            }
        },
        //Add-Update-Delete Chat Mutations
        addChat:{
            type: ChatType,
            args:{
                title: { type: new GraphQLNonNull(GraphQLString)},
                chat_type: { type: new GraphQLNonNull(GraphQLString)},
                usersId: { type: new GraphQLNonNull(new GraphQLList(GraphQLString))},
                createdAt: { type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent,args){
                let chat = new Chat({
                    title: args.title,
                    chat_type: args.chat_type,
                    usersId: args.usersId,
                    createdAt: args.createdAt
                });
                chat.save().then(() => {
                    pubsub.publish('chatAdded', {chatAdded: chat});
                });
                return chat;
            }
        },
        updateChat:{
            type: ChatType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID)},
                title: { type: GraphQLString },
                chat_type: { type: GraphQLString },
                usersId: { type: new GraphQLList(GraphQLString)},
                lastMessageId: { type: GraphQLString }
            },
            resolve(parent,args){
                return Chat.findByIdAndUpdate(args.id, {
                    title: args.title,
                    chat_type: args.chat_type,
                    usersId: args.usersId,
                    lastMessageId: args.lastMessageId
                }, { new: true});
            }
        },
        deleteChat: {
            type: ChatType,
            args: { id: { type: new GraphQLNonNull(GraphQLID)}},
            resolve(parent,args){
                return Chat.findByIdAndDelete(args.id);
            }

        },
        //Add-Update-Delete Message Mutations
        addMessage:{
            type: MessageType,
            args:{
                message: {type: new GraphQLNonNull(GraphQLString)},
                date: {type: new GraphQLNonNull(GraphQLString)},
                senderId: {type: new GraphQLNonNull(GraphQLID)},
                receiverId: {type: new GraphQLNonNull(GraphQLID)}
            },
            async resolve(parent,args){
                try {
                    const hshdmessge = await bcyrpt.hash(args.message,saltRounds);

                    let message = new Message({
                        message: hshdmessge,
                        date: args.date,
                        senderId: args.senderId,
                        receiverId: args.receiverId
                    });
                    message.save().then(() => {
                        pubsub.publish('messageAdded', {messageAdded: message});
                    });

                    return message;

                }catch (err) {
                    console.log(err);
                }
            }
        },
        updateMessage: {
            type: MessageType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLID)},
                message: {type: GraphQLString}
            },
            async resolve(parent,args){
                try {
                    const hshmessage = await bcyrpt.hash(args.message, saltRounds);

                    return Message.findByIdAndUpdate(args.id,{
                        message: hshmessage
                    },{ new: true});
                }catch (err) {
                    console.log(err);
                }
            }
        },
        deleteMessage: {
            type: MessageType,
            args: { id: { type: new GraphQLNonNull(GraphQLID)}},
            resolve(parent,args){
                return Message.findByIdAndDelete(args.id);
            }
        },
        //Login user Mutation
        loginUser: {
            type: AuthPayload,
            args: {
                username: { type: new GraphQLNonNull(GraphQLString)},
                password: { type: new GraphQLNonNull(GraphQLString)}
            },
            async resolve(parent,args){
                try {
                    const user = await User.findOne({ username: args.username });
                    if (!user) {
                        return new Error("User not found");
                    }

                    const x = bcyrpt.compareSync(args.password, user.password);
                    if (!x) {
                        return new Error('Password Wrong');
                    }

                    require('dotenv').config({path: '../.env'});
                    const secretKey = process.env.SECRET_KEY;
                    const token = jwt.sign({userId: user.id}, secretKey, {expiresIn: '1h'});
                    return {token, user};

                }catch (err){
                    return new Error(err);
                }
            }
        }
    }
});

const Subscription = new GraphQLObjectType({
   name: 'Subscription',
   fields: {
        messageAdded: {
            type: MessageType,
            subscribe: () => pubsub.asyncIterator('messageAdded')
        },
       chatAdded: {
            type: ChatType,
            subscribe: () => pubsub.asyncIterator('chatAdded')
       },
       userAdded: {
            type: UserType,
            subscribe: () => pubsub.asyncIterator('userAdded')
       }
   }
});


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
    subscription: Subscription
});