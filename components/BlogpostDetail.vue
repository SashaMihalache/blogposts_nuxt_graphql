<template lang="pug">
  .blogpost-detail
    .blog-body {{ blogpost.body }}
    .blog-author written by {{ blogpost.user.name }}

    .comments-list
      .comment-item(v-for="comment in blogpost.comments")
        .comment-author {{ comment.user.name }}:
        .comment-detail {{ comment.body }}
</template>

<script>
export default {
  props: {
    blogpost: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
}
</script>