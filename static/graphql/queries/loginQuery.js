import gql from 'graphql-tag'

export default gql`
  query {
    username(name: "test1") {
      id
      name
      email
    }
  }
`;