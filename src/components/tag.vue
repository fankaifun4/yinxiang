<style lang="less" scoped>
  .tag-cont{
    max-width:300px;
    min-width: 168px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    position: relative;
    border-radius: 4px;
    box-shadow: 0 0 6px 0 rgba(0,0,0,.25);
    padding:0 20px;
    margin-bottom:20px;
    margin-left: 20px;
    .tag-cont-txt{
      overflow: hidden;
      font-size: 30px;
      text-overflow: ellipsis;
      white-space: nowrap;
      color:rgb(119,119,119);
    }
    .xiang{
      position: absolute;
      width:35px;
      height: 42px;
      overflow: hidden;
      bottom: 0;
      right: -12px;
    }
  }
</style>
<template>
  <div class="tag-cont">
    <div class="tag-cont-txt">{{name}}</div>
    <img v-if="live==1" src="/static/images/huix@3x.png" class="xiang" alt="">
    <img v-if="live==2" src="/static/images/fenx@3x.png" class="xiang" alt="">
    <img v-if="live==3" src="/static/images/lanx@3x.png" class="xiang" alt="">
    <img v-if="live==4" src="/static/images/hongx@3x.png" class="xiang" alt="">
  </div>
</template>
<script>
  export default {
    props:['name','live']
  }
</script>
