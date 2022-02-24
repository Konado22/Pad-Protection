import { gql } from "@apollo/client";

export const ADD_ROOM = gql`
  mutation addRoom($name: String!) {
    addRoom(name: $name) {
      _id
      name
      value
    }
  }
`;

// export const ADD_POLICY = gql`

// mutation addPolicy($name: String!, provider: String, policyId: String, ppc: String ) {
//   addPolicy (
//     name: $name,
//     provider: $provider,
//     policyId: $String,
//     ppc: $String
//   )
//   {
//     policy{
//       _id
//     }
//   }
// }
// `;

export const ADD_ITEM = gql`
  mutation addItem(
    $itemName: String!
    $itemCategory: String
    $itemValue: Int
    $itemPurchaseDate: Date
  ) {
    addItem(
      itemName: $itemName
      itemCategory: $itemCategory
      itemValue: $itemValue
      itemPurchaseDate: $itemPurchaseDate
    ) {
      _id
      itemName
      itemCategory
      itemValue
      itemPurchaseDate
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ASSET = gql`
  mutation addAsset(
    $name: String!
    $estimatedValue: Int
    $ppr: Int
    $purchasedDate: Date
    $location: String
  ) {
    addAsset(
      name: $name
      estimatedValue: $estimatedValue
      ppr: $ppr
      purchasedDate: $purchasedDate
      location: $location
    ) {
      _id
      name
      estimatedValue
      purchasedDate
      policy {
        name
        provider
        policyId
        ppp
      }
      location
      rooms {
        _id
        name
        items {
          _id
          itemName
        }
        value
      }
      user {
        _id
        firstName
        lastName
        email
        profile
        age
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $profile: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      profile: $profile
    ) {
      token
      user {
        _id
      }
    }
  }
`;
