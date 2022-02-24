import { gql } from "@apollo/client";

export const GET_ME = gql`
  {
    user {
      _id
      firstName
      lastName
      email
      profile
      assets {
        _id
        name
        estimatedValue
        ppr
        purchasedDate
        location
        rooms {
          _id
          name
          value
          items {
            _id
            itemName
            itemCategory
            itemValue
          }
        }
      }
    }
  }
`;
export const GET_ASSET = gql`
  query asset($_id: ID!) {
    asset(_id: $_id) {
      _id
      name
      estimatedValue
      purchasedDate
      location
      rooms {
        _id
        name
        value
        items {
          _id
          itemName
          itemCategory
          itemValue
        }
      }
    }
  }
`;
export const GET_ROOM = gql`
  query room($_id: ID!) {
    room(_id: $_id) {
      _id
      name
      value
      items {
        _id
        itemName
        itemCategory
        itemValue
        itemPurchaseDate
      }
    }
  }
`;

export const GET_ITEM = gql`
  query item($_id: ID!) {
    item(_id: $_id) {
      items {
        itemName
        itemCategory
        itemValue
        itemPurchasedDate
      }
    }
  }
`;


// export const QUERY_CHECKOUT = gql`
//   {
//     checkout {
//       session
//   }
// `;
