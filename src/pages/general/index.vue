<template lang='pug'>
  .main
    .energy-tab
      a.energy-tab__item
        span 综合用量报表
      a.energy-tab__item
        span 单耗报表
      a.energy-tab__item
        span 能源消耗报表
</template>

<script>
export default {
  name: 'general',
  data() {
    return {
      activeTab: 'first'
    };
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
</style>

