const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    _id: ID!
  }

  type User {
    _id: ID!
    username: String!
  }

  type Query {
    book: [Book]
    user(_id: String): [User]
  }

  # type Mutation {

  # }
`;

module.exports = typeDefs;
