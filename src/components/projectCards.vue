<template>
  <div class="col-6 col-md-4 col-lg-3">
    <div class="card border-0">
      <img
        :src="imgSource"
        class="card-img-top"
        style="height: 200px; object-fit: cover"
      />
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <h6 class="card-subtitle mb-2 text-grey-500">{{ description }}</h6>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import imagePlaceholder from "@/assets/placeholder.jpg";
export default {
  name: "projectCard",
  props: {
    image: String,
    title: String,
    description: String,
    link: String
  },
  computed: {
    imgSource() {
      return this.image || imagePlaceholder;
    }
  }
};
</script>
<style lang=""></style>
