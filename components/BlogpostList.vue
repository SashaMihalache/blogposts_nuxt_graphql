<template lang="pug">
  .container
    div(
      @click="handleGoToBlogpost(blogpost.id)"
      v-for="blogpost in blogposts"
      :key="blogpost.id"
    )
      div {{ blogpost.bodyShort }} 
</template>

<script>
export default {
  props: {
    blogposts: {
      type: Array,
      required: true,
      default: () => []
    }
  },

  methods: {
    handleGoToBlogpost(id) {
      console.log(id);
    },
    
  }
}
</script>