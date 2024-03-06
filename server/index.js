const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require("mongoose");
const cors = require('cors');
const User = require('./models/user');
const app = express();
//const protectedRoutes = require('middleware/protectedRoutes');

require('dotenv').config({path: '../.env'});
const dbPw = process.env.MLAB_PASSWORD;

app.use(cors());

//app.use('/chat',protectedRoutes);

mongoose.connect(`mongodb+srv://admin:${dbPw}@merntry.peg7i05.mongodb.net/?retryWrites=true&w=majority`);
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

app.get('/chat/:id', async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    return res.json(user);
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("4000 deyiz kaptan");
    console.log('http://localhost:4000/graphql');
});
