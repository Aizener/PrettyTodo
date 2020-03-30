<template>
  <div class="about">
    <h3 class="title">嗨，进入此页面的你，你好啊！</h3>
    <p>额，先自我介绍一哈：</p>
    <p>我叫杨祥，曾经是个PHP开发，现在的话，想做前端，因为对前端更感兴趣吧。</p>
    <p>介绍完自己，那现在就来介绍一下这个Demo吧。</p>
    <p>你没看错，是Demo！</p>
    <p>看到这儿，你是不是会想，为啥会放个Demo上来呢？听我娓娓道来：</p>
    <p>
      因为目前你看的这个应用，是很不完整的。当初，我看到B站有一个比这个更好的Todo项目，
      做的很炫酷，我看了演示后就试图自己做一做，怎料个人水平有限，实现的很不理想。
    </p>
    <p>
      刚开始时，我有许多的idea，试图做的比B站看到的更酷，可是，在做下去时，遇到了不少困难，
      原本想用Express来加入后端的，最后也不了了之。
    </p>
    <p>
      说实话，现在这个界面，其实是经过当初想的Demo阉割很多次而来，不过也有所长进，这感觉还好吧
    </p>
    <h3>
      感谢阅读， Thanks♪(･ω･)...
      <p class="loading"></p>
    </h3>
  </div>
</template>

<style lang="less" scoped>
.about {
  position: absolute;
  width: 95%;
  overflow-y: scroll;
  height: 100vh;
  top: 30px;
  .title {
    text-align: center;;
  }
  & > p {
    margin-top: 10px;
  }
  .loading {
    width: 35px;
    height: 35px;
    border: 2px solid #fff;
    border-left-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    float: right;
    margin-right: 15px;
    animation: rotate 2s infinite;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0);
      box-shadow: 0 0 0 gray;
    }
    50% {
      box-shadow: 0 0 30px gray;
    }
    100% {
      transform: rotate(365deg);
      box-shadow: 0 0 0 gray;
    }
  }
}
</style>
