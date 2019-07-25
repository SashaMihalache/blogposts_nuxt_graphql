<template lang="pug">
  .container
    div
      h1 Add Blogpost
    div
      input(v-model='title')
    div
      input(v-model='body')
    button(@click='handleAddBlogpost') Add
</template>


<script>
import createBlogpostMutation from '@/static/graphql/mutations/createBlogpostMutation';

export default {
  data() {
    return {
      title: '',
      body: '',
      userId: null
    }
  },

  methods: {
    async handleAddBlogpost() {
      const { data } = await this.$apollo.mutate({
        mutation: createBlogpostMutation,
        variables: {
          title: this.title,
          body: this.body,
          userId: JSON.parse(localStorage.getItem('user')).id
        }
      })

      this.$router.push('/blogposts')
    }
  }
}
</script>
