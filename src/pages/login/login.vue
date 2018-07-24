<template lang='pug'>
  .login-page
    .login-page--bg
      img.text-bg(src="@/assets/images/login/login-text.png")
      .login-form
        h5.login-form--title 用户登录
        .login-input-group
          p.input-title 用户名
          input(type="text",placeholder="请输入用户名")
        .login-input-group
          p.input-title 密码
          input(type="password",placeholder="请输入密码")
        .choose-group
          i(@click="chooseRemberPwd",:class="['icon-choose',isChoose ? 'active' : '']")
          span 记住密码
        router-link.login-btn(to="/")
    .login-page--logo
      span LOGO
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      isChoose: false
    };
  },
  methods: {
    chooseRemberPwd() {
      this.isChoose = !this.isChoose;
    }
  }
};
</script>

<style lang='scss' scoped>
@import '../../assets/css/_mixin';
.login-page {
  @include wh(100%, 100%);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #0a61aa;
  .login-page--bg {
    padding: vm(170) vm(180) vm(184) vm(207);
    background: url('../../assets/images/login/bg.png') center bottom no-repeat;
    background-size: 100%;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .text-bg {
      width: vm(656);
    }
  }
  .login-page--logo {
    position: absolute;
    left: vm(52);
    top: vm(32);
    background: rgba(255, 255, 255, 0.2);
    height: vm(83);
    line-height: vm(83);
    padding: 0 vm(37);
    @include fs(vm(36), #fefefe);
    font-weight: bold;
  }
}
.login-form {
  position: absolute;
  padding: vm(117) vm(151) vm(150);
  top: vm(-117);
  right: vm(220);
  @include wh(vm(702), vm(744));
  background: url('../../assets/images/login/form-bg.png') center center
    no-repeat;
  background-size: contain;
  .login-form--title {
    @include fs(vm(38), #095285);
    text-align: center;
    font-weight: bold;
    padding-bottom: vm(12);
  }
  .login-btn {
    display: block;
    margin: auto;
    @include wh(vm(246), vm(60));
    background: url('../../assets/images/login/login-btn.png');
    background-size: contain;
  }
}
.login-input-group {
  margin-top: vm(40);
  .input-title {
    @include fs(vm(20), #999);
    margin-bottom: vm(10);
  }
  input {
    outline: none;
    display: block;
    border-bottom: 1px solid #bababa;
    width: 100%;
    @include fs(vm(16), #333);
    padding-bottom: vm(10);
  }
}
.choose-group {
  margin-top: vm(33);
  margin-bottom: vm(72);
  @include fs(vm(16), #999);
  .icon-choose {
    display: inline-block;
    @include wh(vm(16), vm(16));
    background: url('../../assets/images/login/box-choose.png') center center
      no-repeat;
    background-size: 100%;
    margin-right: vm(4);
    vertical-align: middle;
    &.active {
      background-image: url('../../assets/images/login/box-choosed.png');
    }
  }
}
</style>

