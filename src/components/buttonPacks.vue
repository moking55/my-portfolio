<template>
  <RouterLink :to="target" class="mx-1 btn btn-outline-primary" role="button">
    <i v-if="icon" :class="icon" class="me-2"></i>{{ name }}
  </RouterLink>
</template>
<script lang="ts">
import { RouterLink } from "vue-router";

export default {
  name: "buttonPacks",
  components: {
    RouterLink
  },
  props: {
    target: {
      required: true,
      type: String
    },
    name: String,
    icon: String,
  }
};
</script>
<style scoped></style>
