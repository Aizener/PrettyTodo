<template>
  <div class="introduce">
    <p class="avatar">
      <img src="https://avatar-static.segmentfault.com/298/194/2981941931-5db6b77c445dc_big64" alt="" />
    </p>
    <div class="infos">
      <h2>Hello, Cola.</h2>
      <p class="info">这看起来感觉好极了</p>
      <p class="info">这是我的待办事项</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import "../assets/less/adapter.less";

.introduce {
  .vw(300);
  width: @width;
  margin: 30px auto;
  height: 200px;
  .avatar {
    .vw(50);
    width: @width;
    height: @width;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 2px 3px 10px black;
  }
  .infos {
    color: #fff;
    .info {
      font-size: 14px;
      margin: 3px;
      font-weight: 200;
    }
  }
}
</style>
