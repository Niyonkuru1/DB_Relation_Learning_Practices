import { gql } from "apollo-server";
export const userDefs = gql`
  type Query {
    get_all_requests: [RequestCreated]!
  }
  type Mutation {
    create_user(input: RequestCreateInput): RequestCreated!
  }

  input RequestCreateInput {
    name: String!
    email: String!
    message: String!
    house_id: ID!
    landlord_id: ID!
  }

  type RequestCreated {
    name: String!
    email: String!
    message: String!
    house_id: ID!
    landlord_id: ID!
    _id: ID!
  }
`;
