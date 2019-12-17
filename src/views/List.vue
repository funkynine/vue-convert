<template>
  <div class="currencies">
    <h1>List Currencies</h1>
    <div class="currencies-list">
      <div v-for="item in ListValue" :key="item.id" class="currencies-list__item">
        <v-card
          class="mx-auto"
          max-width="344"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">currency</div>
              <v-list-item-title class="headline mb-1">
                {{ item.base_ccy }} to {{ item.ccy }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ item.sale }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </div>
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
@import '../assets/scss/list.scss';
</style>
