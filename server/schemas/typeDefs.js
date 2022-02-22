const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Date

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
    purchasedDate: Date
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
    room: [Room]
  }
  ## All assets for user
  type UserAssets {
    assets: [Asset]
  }
  ## All rooms in an asset
  type AssetRooms {
    rooms: Room
  }
  ## All items in a room
  type RoomItems {
    items: [Item]
  }

  type Checkout {
    session: ID
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
    assetRooms(_id: ID): Asset
    # return all items for particular room
    roomItems(_id: ID!): RoomItems
    assets: [Asset]
    rooms: [Room]
    policies: [Policy]
    checkout: Checkout
  }

  type Mutation {
    # Asset CRU
    addAsset(
      name: String!
      estimatedValue: Int
      ppr: Int
      purchasedDate: Date
      location: String
    ): Asset
    removeAsset(_id: ID!): Asset
    updateAsset: Asset

    # Room CRU
    addRoom(name: String!, value: Int): Room
    removeRoom(_id: ID!): Room
    updateRoom: Room

    # Item CRU
    addItem(
      itemName: String!
      itemCategory: String
      itemValue: Int
      purchaseDate: Date
      room: Int
    ): Item
    removeItem(_id: ID!): Item
    updateItem(
      itemName: String!
      itemCategory: String
      itemValue: Int
      purchaseDate: String
      room: Int
    ): Item

    # User CREATE and LOGIN
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      profile: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
