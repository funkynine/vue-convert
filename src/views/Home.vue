<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <conversion/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import conversion from '@/components/conversion/conversion.vue';

export default {
  name: 'home',
  components: {
    conversion,
  },
};
</script>
