import {gql} from "@apollo/client";

const ADD_USER_QUERY = gql`
    mutation AddUser($name: String!, $username: String!, $email: String!, $password: String!){
      addUser(name: $name, username: $username, email: $email, password: $password){
        id
        username
        name
      }
    }
`;

export {ADD_USER_QUERY};