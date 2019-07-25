<template lang="pug">
  .container
    div
      h1 Login Page
    div
      input(type='text')
    div
      a(href="/blogposts") Go to blogs
</template>

<script>

export default {
  asyncData(context) {
    console.log(context.app.apolloProvider.defaultClient);
  },
}
</script>
