import {gql} from "@apollo/client";

const VERIFY_TOKEN_MUTATION = gql`
    mutation VerifyToken($token: String!){
        verifyToken(token: $token){
            success
            user{
                id
            }
            error{
                message
            }
        }
    }
`;

export {VERIFY_TOKEN_MUTATION};