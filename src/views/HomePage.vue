<template>
  <div>
    Home
    <p>
      {{ this.$store.state.num }}
    </p>
    <button v-on:click="plus">더하기</button>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      num: this.$store.state.num,
    }
  },
  methods: {
    plus() {
      this.$store.commit('plus',1);
      // this.num = this.num+1;
    }
  }
}
</script>

<style scoped>
</style>