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
// export const QUERY_CHECKOUT = gql`
//   {
//     checkout {
//       session
//   }
// `;
