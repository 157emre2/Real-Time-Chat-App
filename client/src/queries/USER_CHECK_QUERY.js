import {gql} from "@apollo/client";

const USER_CHECK_QUERY = gql`
    query UserSearch($username: String!){
      userSearch(username: $username){
        id
        password
      }
}
`;

export {USER_CHECK_QUERY};