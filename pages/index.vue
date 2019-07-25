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
import getUserQuery from '@/static/graphql/queries/getUserQuery';

export default {

  data() {
    return {
      username: '',
      hasError: false
    }
  },
  
  methods: {
    async handleLogin() {
      const result = await this.$apollo.query({
        query: getUserQuery,
        variables: {
          username: this.username
        }
      })
      console.log('Login Query Result: ', result);

      const { data } = result;

      if (data.user) {
        this.handlePostLogin(data.user);
      } else {
        this.hasError = true;
      }
    },

    handlePostLogin(user) {
      window.localStorage.setItem('user', JSON.stringify(user))
      this.$router.push('/blogposts');
    }
  }
}
</script>
