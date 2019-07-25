<template lang='pug'>
  .container
    div
      h1 Blogpost Detail page
    div
      a(href='/blogposts') Go back to all blogposts
</template>

<script>
export default {
  asyncData({ params}) {
    console.log(params);
  },
}
</script>

<style>

</style>
