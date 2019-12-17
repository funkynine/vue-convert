<template>
  <div class="list-currencies">
    <h1>List Currencies</h1>
    <div v-for="item in ListValue" :key="item.id" class="currencies">
      <p> {{ item.ccy }} </p>
      <p> {{ item.base_ccy }} </p>
      <p> {{ item.buy }} </p>
      <p> {{ item.sale }} </p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: mapGetters(['ListValue']),
  methods: mapActions(['getValue']),
  async mounted() {
    this.getValue();
  },
};
</script>

<style scoped>
  .currencies {
    border: 1px solid lightgray;
  }
</style>
