import { gql } from "apollo-server";
export const userDefs = gql`
  type Query {
    get_all_users: [LandlordCreated]!
  }
  type Mutation {
    create_user(input: LandlordCreateInput): LandlordCreated!
  }

  input LandlordCreateInput {
    name: String!
    phone: String!
    pass_word: String!
    role: String!
    houses: [ID]!
    requests: [ID]!
  }

  type LandlordCreated {
    name: String!
    phone: String!
    pass_word: String!
    role: String!
    houses: [ID]!
    requests: [ID]!
    _id: ID!
  }
`;
