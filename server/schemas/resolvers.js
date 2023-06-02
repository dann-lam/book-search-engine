const { Book, User } = require("../models");
//Defines our routes here.

const resolvers = {
  Query: {
    book: async () => {
      return Book.find({});
    },
    user: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return User.find(params);
    },
  },
};

module.exports = resolvers;
