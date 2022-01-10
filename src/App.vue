<template>
  <div id="app">
<!--    <Hello v-bind:deliever-data="num"></Hello>-->
<!--    <div>-->
<!--      testNum-->
<!--    </div>-->
<!--    <button v-on:click="onClick">확인</button>-->
    <div>
      <router-link to="/">홈</router-link>
      <router-link to="/page">페이지</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// import Hello from '@/components/Hello';

export default {
  name: "App",
  // components: {
  //   Hello
  // },
  data() {
    return {
      test: 'tttt',
      num: this.$store.state.num
    }
  },
  methods: {
    onClick() {
      console.log('확인');
    },
  }
};
</script>

<style>

</style>
