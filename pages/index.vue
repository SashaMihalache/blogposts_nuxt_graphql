<template lang="pug">
  .container
    div
      h1 Login Page
    div
      input(type='text' v-model='username')
    div
      button(@click='handleLogin') Login
    div
      a(href="/blogposts") Go to blogs
</template>

<script>
import loginQuery from '@/static/graphql/queries/loginQuery';

export default {

  data() {
    return {
      username: ''
    }
  },
  
  asyncData(context) {
    // console.log(context.app.apolloProvider.defaultClient);
  },

  methods: {
    async handleLogin() {

      const result = await this.$apollo.query({
        query: loginQuery
      })

      console.log('INTRA', result);
    }
  }
}
</script>
