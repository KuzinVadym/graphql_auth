import uuidv1 from 'uuid/v1';

export default {
  Query: {
    users: async (parent, args, { models }) => {
      return await models.User.find();
    },
    user: async (parent, { id }, { models }) => {
      return await models.User.findById(id);
    }
  },
  Mutation: {
    create: async (
      parent,
      { username, email, password },
      { models, secret },
    ) => {
      const user = await models.User.create({
        id: uuidv1(),
        username,
        email,
        password,
      });

      return user;
    },
    
    update: async (
      parent,
      args,
      { models, secret },
    ) => {
      const result = await models.User.findOneAndUpdate({id: args.id}, args, { new: true});
      return result;
    },
    
    delete: async (
      parent,
      args,
      { models, secret },
    ) => {
      const result = await models.User.findOneAndDelete({id: args.id});
      return result;
    },
  }
};
