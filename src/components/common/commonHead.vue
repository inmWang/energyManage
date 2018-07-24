<template lang='pug'>
  .header.clear
    img.logo(src="@/assets/images/header/logo.png")
    .header-small-title
      p 中策橡胶（富阳）有限公司
      p 杭州中策清泉实业有限公司
    .header-line
    .header-large-title 能源管理平台
    .header-right
      p.hello-title “您好：XXXXXX”
      .header-nav.clear
        router-link(ref="indexLink",to="/home/index",:class="isIndex ? 'active' : ''") 系统首页
        a 修改密码
        a 系统管理
        a 帮助中心
</template>

<script>
export default {
  name: 'commonHead',
  computed: {
    isIndex() {
      const path = this.$route.fullPath;
      if (path === '/home/index') {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang='scss' scoped>
@import '../../assets/css/_mixin';
.header {
  width: 100%;
  height: vm(84);
  background: #113252;
  position: relative;
  z-index: 101;
  padding: vm(10) vm(30) vm(7) vm(20);
  .logo {
    width: vm(165);
    display: block;
    float: left;
    margin-right: vm(29);
  }
  .header-small-title {
    font-size: vm(20);
    color: #e8f6ff;
    line-height: vm(32);
    margin-right: vm(17);
    float: left;
  }
  .header-line {
    @include wh(vm(107), 1px);
    border-top: 1px solid #e8f6ff;
    margin-top: vm(32);
    margin-right: vm(18);
    float: left;
  }
  .header-large-title {
    float: left;
    padding-top: vm(5);
    @include fs(vm(41), #e8f6ff);
  }
  .header-right {
    float: right;
    .hello-title {
      @include fs(vm(15), #fff);
      text-align: right;
      margin-bottom: vm(11);
    }
    .header-nav {
      a {
        @include fs(vm(16), #7ab2c4);
        border: 1px solid #7ab2c4;
        padding: vm(3) vm(11);
        border-radius: vm(50);
        margin-right: vm(50);
        &:last-child {
          margin-right: 0;
        }
        &.active {
          color: #fff;
          border: 1px solid #fff;
        }
      }
    }
  }
}
</style>

