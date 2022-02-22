import { gql } from "@apollo/client";

export const ADD_ROOM = gql`
mutation addRoom($name: String!,) {
  addRoom(name: $name)
  {
    room{
      _id
    }
  }
}
`;

export const ADD_ITEM = gql`
mutation addItem($itemName: String!, itemCategory: String, itemValue: Int, purchasedDate: Date ) {
  addItem (
    itemName: $itemsName,
    itemCategory: $itemCategory,
    itemValue: $itemValue,
    purchasedDate: $purchasedDate
  )
  {
    item {
      _id
    }
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

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
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
