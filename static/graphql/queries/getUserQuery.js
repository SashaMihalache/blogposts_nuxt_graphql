import gql from 'graphql-tag'

export default gql`
  query user($username: String!) {
    user(name: $username) {
      id
      name
      email
    }
  }
`;