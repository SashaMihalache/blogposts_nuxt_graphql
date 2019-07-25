import gql from 'graphql-tag'

export default gql`
  query loginQuery($username: String!) {
    username(name: $username) {
      id
      name
      email
    }
  }
`;