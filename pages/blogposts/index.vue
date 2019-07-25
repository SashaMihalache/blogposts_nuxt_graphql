<template lang="pug">
  .container
    div
      h1 All Blogposts page

    div
      a(v-if="isLogged" href='blogposts/add') Add New Blogpost
      a(v-else href='/') Log in to post a blog
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
      blogposts: [],
      isLogged: false
    }
  },

  mounted() {
    this.isLogged = !!JSON.parse(localStorage.getItem('user'))
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
      localStorage.removeItem('user');
      this.$router.push('/');
    }
  }
}
</script>

<style>

</style>
