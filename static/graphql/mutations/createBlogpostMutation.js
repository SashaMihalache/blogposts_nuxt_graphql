import gql from 'graphql-tag'

export default gql`
  mutation createBlogpost(
    $title: String!,
    $body: String!,
    $userId: ID!
    ) {
    createBlogpost(input: {
      title: $title,
      body: $body,
      userId: $userId
    }) {
      clientMutationId
    }
  }
`;