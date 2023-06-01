const express = require("express");
//Added AppolloServer
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const db = require("./config/connection");
const routes = require("./routes");
//add our schemas
const { typeDefs, resolvers } = require("./schemas");

const app = express();
const PORT = process.env.PORT || 3001;

//Set our appolloserver with our typedefs and resolvers to server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
};

//Temporarily turned off
// app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});

startApolloServer();
