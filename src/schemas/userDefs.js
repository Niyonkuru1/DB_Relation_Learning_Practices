import { gql } from "apollo-server";
export const userDefs = gql`
  type Query {
    get_all_users: [UserCreated]!
  }
  type Mutation {
    create_user(input: UserCreateInput): UserCreated!
  }

  input UserCreateInput {
    name: String!
    phone: String!
    pass_word: String!
    role: String!
    landlords: [ID]!
    houses: [ID]!
    requests: [ID]!
  }

  type UserCreated {
    name: String!
    phone: String!
    pass_word: String!
    role: String!
    landlords: [ID]!
    houses: [ID]!
    requests: [ID]!
    _id: ID!
  }
`;
