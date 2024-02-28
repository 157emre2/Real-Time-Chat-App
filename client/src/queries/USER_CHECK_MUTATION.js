import {gql} from "@apollo/client";

const USER_CHECK_MUTATION = gql`
    mutation LoginUser($username: String!, $password: String!){
      loginUser(username: $username, password: $password){
        token
        user{
          id
          name
          username
        }
        error{
          message
        }
      }
}
`;

export {USER_CHECK_MUTATION};