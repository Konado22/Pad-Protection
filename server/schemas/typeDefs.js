const { gql } = require('apollo-server-express');

const typeDefs = gql`
  ## User details
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    profile: String!
    age: Int
    assets: [Asset]
  }
  type Auth {
    token: ID
    user: User
  }
  # Policy details
  type Policy {
    name: String
    provider: String
    policyId: String
    ppp: Int
  }
  ## Asset details
  type Asset {
    _id: ID
    name: String!
    estimatedValue: Int
    ppr: Int
    purchasedDate: Int
    policy: [Policy]
    location: String
    rooms: [Room]
    user: User
  }
  ## Room details
    type Room {
    _id: ID
    name: String
    items: [Item]
    value: Int
  }
  ## Item details
  type Item {
    _id: ID
    itemName: String
    itemCategory: String
    itemValue: Int
    itemPurchaseDate: String
    room: Room
  }
  ## All assets for user
  type UserAssets {
    assets: [Asset]
  }
  ## All rooms in an asset
  type AssetRooms {
    rooms: [Room]
  }
  ## All items in a room
  type RoomItems {
    items: [Item]
  }

  type Query {
    # return individual user, policy, asset, room and item details
    user: User
    policy(_id: ID!): Policy
    asset(_id: ID!): Asset
    room(_id: ID!): Room
    item(_id: ID!): Item
    items: [Item]
    # returns all assets for particular user
    userAssets(_id: ID!): UserAssets
    # returns all rooms for particular asset
    assetRooms(_id: ID): AssetRooms
    # return all items for particular room
    roomItems(_id: ID!): RoomItems
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, profile: String!, password: String!, age: Int): Auth
    # addAsset(name: String!, estimatedValue: Int, ppr: Int, purchasedDate: Int, policy: [Policy], location: String): Asset
    addRoom(name: String!, value: Int): Room
    addItem(name: String!, category: String, value: Int, purchaseDate: String): Item
  }
`;

module.exports = typeDefs;
