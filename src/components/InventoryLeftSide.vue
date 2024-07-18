<script setup lang="ts">
import "../assets/colors.css"

</script>

<template>
<div class="left-side-wrapper">
  <div class="main-photo-wrapper">
    <img src="../assets/main-photo.png" alt="">
  </div>
  <div class="information-wrapper">
    <div class="title">
      Привет
    </div>
    <div class="description">

    </div>
  </div>
</div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left-side-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  border-radius: 12px;
  background: var(--c-section-bg);
}

.main-photo-wrapper {
  margin: 20px 0 10px 0;
  padding: 0 20px 0 20px;

  img {
    border-radius: 20px;
  }
}

.information-wrapper {
  margin: 10px 0 20px 0;
}
</style>
