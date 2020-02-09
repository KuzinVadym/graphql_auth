//import uuidv1 from 'uuid/v1';

export default {
  Query: {
    users: async (_parent, _args, { models }) => {
      return await models.User.find();
    },
    user: async (_parent, { id }, { models }) => {
      return await models.User.findById(id);
    }
  },
  Mutation: {
    create: async (
        _parent,
      { username, email, password },
      // { models },
    ) => {
      return { username, email, password }
      // await models.User.create({
      //   id: uuidv1(),
      //   username,
      //   email,
      //   password,
      // });
    },
    
    update: async (
        _parent,
      args,
      { models},
    ) => {
      return await models.User.findOneAndUpdate({id: args.id}, args, {new: true});
    },
    
    delete: async (
        _parent,
      args,
      { models },
    ) => {
      return await models.User.findOneAndDelete({id: args.id});
    },
  }
};
