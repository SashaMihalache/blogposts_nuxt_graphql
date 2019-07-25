<template lang="pug">
  .container
    div
      h1 Login Page
    div
      input(type='text' v-model='username')
      p(v-if="hasError") User not found
    div
      button(@click='handleLogin') Login
</template>

<script>
import loginQuery from '@/static/graphql/queries/loginQuery';

export default {

  data() {
    return {
      username: '',
      hasError: false
    }
  },
  
  asyncData(context) {
    // console.log(context.app.apolloProvider.defaultClient);
  },

  methods: {
    async handleLogin() {
      const result = await this.$apollo.query({
        query: loginQuery,
        variables: {
          username: this.username
        }
      })
      console.log('Login Query Result: ', result);

      const { data } = result;

      if (data.username) {
        this.$router.push('/blogposts');
      } else {
        this.hasError = true;
      }
    }
  }
}
</script>
