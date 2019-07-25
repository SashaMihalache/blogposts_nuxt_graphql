<template lang="pug">
  .blogpost-list
    .blogpost-item(
      @click="handleGoToBlogpost(blogpost.id)"
      v-for="blogpost in blogposts"
      :key="blogpost.id"
    )
      .header {{ blogpost.bodyShort }} 
      .author written by: {{ blogpost.user.email }}
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