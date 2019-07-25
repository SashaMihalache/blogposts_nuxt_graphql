<template lang="pug">
  .container
    div
      h1 All Blogposts page

    div
      a(href='blogposts/add') Add New Blogpost

    BlogpostList(:blogposts="blogposts")

    div
      button(@click='handleLogout') Logout
</template>

<script>
import BlogpostList from '@/components/BlogpostList';
import getAllBlogpostsQuery from '@/static/graphql/queries/getAllBlogpostsQuery';

export default {
  components: { BlogpostList },

  data() {
    return {
      blogposts: []
    }
  },
  
  async asyncData({ app }) {
    const apollo = app.apolloProvider.defaultClient;

    const result = await apollo.query({
      query: getAllBlogpostsQuery
    })

    return { blogposts: result.data.blogposts }
  },

  methods: {
    handleLogout() {
      window.localStorage.removeItem('user');
      this.$router.push('/');
    }
  }
}
</script>

<style>

</style>
