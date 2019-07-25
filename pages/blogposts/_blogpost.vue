<template lang='pug'>
  .container
    div
      h1 Blogpost Detail page
    div
      BlogpostDetail(v-if="blogpost" :blogpost="blogpost")
    div
      a(href='/blogposts') Go back to all blogposts
</template>

<script>
import getBlogpostDetailQuery from '@/static/graphql/queries/getBlogpostDetailQuery';
import BlogpostDetail from '@/components/BlogpostDetail';

export default {
  components: {BlogpostDetail},
  
  data() {
    return {
      blogpost: null
    }
  },

  async asyncData({ params, app}) {
    const apollo = app.apolloProvider.defaultClient;
    const blogpostId = params.blogpost;

    const { data } = await apollo.query({
      query: getBlogpostDetailQuery,
      variables: { id: blogpostId }
    })

    return { blogpost: data.blogpost }
  },
}
</script>

<style>

</style>
