import gql from 'graphql-tag'

export default gql`
  query blogpost($id: ID!) {
    blogpost(id: $id) {
      id
      body
      comments {
        body
        user {
          name
        }
      }
      user {
        name
      }
    }
  }
`;