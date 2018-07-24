<template lang='pug'>
  .content
    commonHeader
    .wrapper
      commonLeft
      router-view
</template>

<script>
import commonHeader from '@/components/common/commonHead';
import commonLeft from '@/components/common/commonLeft';
export default {
  components: {
    commonHeader,
    commonLeft
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
</style>

