import gql from 'graphql-tag'

export default gql`
  {
    blogposts {
      id
      bodyShort
      user {
        email
      }
    }
  }
`;