const{ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');

const MONGODB = "mongodb+srv://TestDev:TestDev@cluster1.j5kmfah.mongodb.net/?retryWrites=true&w=majority"

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers'); 
const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB,{useNewUrlParser: true})
.then(() => {
    console.log("mongoDB Connection SuccessFul");
    return server.listen({port:5000});
})
.then((res) =>{
    console.log(`server running at ${res.url}`)
})