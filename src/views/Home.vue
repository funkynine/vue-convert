<template>
  <div class="home">
    <conversion/>
  </div>
</template>

<script>
// @ is an alias to /src
import conversion from '@/components/conversion/conversion.vue';

export default {
  name: 'home',
  components: {
    conversion,
  },
};
</script>
