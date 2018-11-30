<style scoped lang="less">
  .no-data{
    width:500px;
    margin:0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color:#666;
    .no-act{
      font-size: 40px;
      font-weight: 700;
    }
    .no-act-x{
      font-size: 35px;
      font-weight: 400;
      margin-top:30px;
    }
    img{
      width:240px;
      height: 240px;
    }
    .go-publish{
      margin-top:50px;
      width:300px;
      height:80px;
      line-height: 80px;
      background:rgb(50,135,244);
      color:#fff;
    }
  }
</style>
<template>
  <div class="no-data" v-if="nodata">
    <img src="/static/images/nodata-search.png" alt="">
    <div class="no-act">{{title}}</div>
    <div class="no-act-x">{{tips}}</div>
    <button class="go-publish" @tap="clickBtn">{{btn}}</button>
  </div>
</template>
<script>
  export default {
    props:['nodata','title','tips','btn'],
    methods:{
      clickBtn(){
        this.$emit('clickBtn')
      }
    }
  }
</script>
