export default {
  Query: {
    me: (parent, args, { me }) => {
      return me;
    },
    user: (parent, args, { models }) => {
      return models.users[args.id];
    },
    users: (parent, args, { models }) => {
      return Object.values(models.users);
    },
  },

  User: {
    messages: (user) => {
      return Object.values(messages).filter(
        (message) => message.userId === user.id,
      );
    },
  },
};
