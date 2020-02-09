import { gql } from 'apollo-server-koa';

import userSchema from './user';

const linkSchema = gql`
  scalar Date

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`;

export default [linkSchema, userSchema];