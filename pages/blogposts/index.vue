<template lang="pug">
  .container
    div
      h1 All Blogposts page
    div
      a(href='/blogposts/12') Random
    div
      a(href='/') Go back to login
</template>

<script>
export default {
  asyncData({}) {
    console.log('Fetching blogposts');
  },
}
</script>

<style>

</style>
