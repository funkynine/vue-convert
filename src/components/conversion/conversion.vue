<template>
  <div class="conversion container">
    <h1>Conversion</h1>
    <v-container id="dropdown">
      <v-col cols="12" sm="4">
        <p>Currency UKR to</p>

        <v-overflow-btn
          class="my-2"
          :items="ListValueNames"
          label="Overflow Btn"
          target="#dropdown"
          v-model="currency"
        ></v-overflow-btn>
      </v-col>
    </v-container>
    <input type="text" class="enter" v-model="userEnter" v-mask="'#########'">
    <p v-if="isShowCounter"> = {{ count }} </p>
    <v-btn class="ma-2" outlined color="indigo" @click="submit(currency)">Convert</v-btn>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      count: 0,
      userEnter: 0,
      dropdown_icon: [],
      isShowCounter: false,
      currency: '',
    };
  },
  computed: {
    ...mapGetters(['ListValueNames']),
    ...mapGetters(['ListValue']),
  },
  methods: {
    ...mapActions(['getValue']),
    submit(name) {
      this.isShowCounter = true;
      const result = this.ListValue.filter(item => item.ccy === name);
      this.count = result[0].sale * this.userEnter;
    },
  },
  async mounted() {
    this.getValue();
  },
};
</script>

<style scoped>
@import './style.scss';
</style>
