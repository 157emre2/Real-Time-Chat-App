const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require("mongoose");
const cors = require('cors');


const app = express();

require('dotenv').config({path: '../.env'});
const dbPw = process.env.MLAB_PASSWORD;

app.use(cors());

mongoose.connect(`mongodb+srv://admin:${dbPw}@merntry.peg7i05.mongodb.net/?retryWrites=true&w=majority`);
mongoose.connection.once('open', () => {
    console.log('connected to database');
});



app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("4000 deyiz kaptan");
    console.log('http://localhost:4000/graphql');
});
