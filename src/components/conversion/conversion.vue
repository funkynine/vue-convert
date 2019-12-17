<template>
  <div class="conversion">
    <input type="text">
    <p> = {{ result }} </p>
    <button type="button">Convert</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: 0,
    };
  },
};
</script>

<style scoped>
@import './style.scss';
</style>
