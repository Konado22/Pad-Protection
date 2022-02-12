const { gql } = require('apollo-server-express');

// typeDef Key
// Assets, Rooms, Items, Policy, User : Info to pull from each schema in Db
//
//

const typeDefs = gql`

  type Assets {
    _id: ID
    name: String!
    estimatedValue: Int
    ppr: Int
    purchasedDate: Int
    policy: [Policy]
    location: String
    rooms: [Rooms]
    user: User
  }

  type Rooms {
    _id: ID
    name: String
    items: [items]
    value: Int
  }

  type Items {
    _id: ID
    name: String
    category: String
    value: Int
    purchaseDate: String
  }
  type Policy {
    name: String
    provider: String
    policyId: String
    ppp: Int
  }
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    profile: String!
    age: Int
    assets: [Assets]
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
    userReturn: User
    room(_id: ID!, name: String): [Rooms]!
    items(_id: ID!, name: String): [Items]!
    policy: Policy
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, profile: String!, password: String!, age: Int): Auth
    addAsset(name: String!, estimatedValue: Int, ppr: Int, purchasedDate: Int, policy: [Policy], location: String): Assets
    addRoom(name: String!, value: Int)
    addItem(name: String!, category: String, value: Int, purchaseDate: String): Items
  }
`;

module.exports = typeDefs;
