<template>
  <div>
    <h1>Hello</h1>
    <h3>{{ num }}</h3>
  </div>
</template>

<script>
export default {
    name: 'Hello',
    props: ['delieverData'],
    data() {
      return {
        datdee: this.$props.delieverData,
        num: this.$store.state.num,
      }
    },
  }
</script>

<style>

</style>