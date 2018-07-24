<template lang='pug'>
  .left-menu
    router-link(v-for="(item,index) in menuList",:key="index",:to="item.url",:class="currentUrl === item.url ? 'active' : ''")
      img(:src="'/static/images/' + item.iconName + '.png'")
      span {{item.menuName}}
</template>

<script>
export default {
  name: 'leftMenu',
  data() {
    return {
      menuList: [
        {
          iconName: 'ico_zh',
          menuName: '综合',
          url: '/general/index'
        },
        {
          iconName: 'ico_dian',
          menuName: '电',
          url: '/electric/index'
        },
        {
          iconName: 'ico_zq',
          menuName: '蒸汽',
          url: '/steam/index'
        },
        {
          iconName: 'ico_kq',
          menuName: '空气',
          url: '/air/index'
        },
        {
          iconName: 'ico_shui',
          menuName: '水',
          url: '/water/index'
        }
      ]
    };
  },
  computed: {
    currentUrl() {
      return this.$route.fullPath;
    }
  }
};
</script>

<style lang='scss' scoped>
@import '../../assets/css/_mixin';
.left-menu {
  width: vm(204);
  padding-top: vm(55);
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  background: #113252;
  a {
    display: block;
    cursor: pointer;
    padding: vm(15) 0;
    text-align: center;
    margin-bottom: vm(19);
    @include fs(vm(18), #fff);
    border-left: vm(6) solid #113252;
    &.active {
      border-left: vm(6) solid #3599dd;
      background: rgba(83, 149, 195, 0.2);
    }
    img {
      display: block;
      margin: 0 auto vm(10);
      @include wh(vm(50), vm(50));
    }
  }
}
</style>

