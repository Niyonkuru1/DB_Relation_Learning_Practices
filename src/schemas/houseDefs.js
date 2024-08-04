import { gql } from "apollo-server";
export const userDefs = gql`
  type Query {
    get_all_houses: [HouseCreated]!
  }
  type Mutation {
    create_house(input: HouseCreateInput): HouseCreated!
  }

  input HouseCreateInput {
    landlord_id: ID!
    size: Number!
    location: String
    description: String
    price: Number
    numberOfBeds: Number
    status: String
    requests: [ID]!
  }

  type HouseCreated {
    landlord_id: String!
    size: Number!
    location: String
    description: String
    price: Number
    numberOfBeds: Number
    status: String
    requests: [ID]!
    _id: ID!
  }
`;
