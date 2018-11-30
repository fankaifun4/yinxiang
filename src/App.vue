<script>
  export default {
    created () {
      // 调用API从本地缓存中获取数据
      const logs = wx.getStorageSync('logs') || []
      logs.unshift(Date.now())
      wx.setStorageSync('logs', logs)

      console.log('app created and cache logs by setStorageSync')
    }
  }
</script>

<style lang="less">
  page {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  .fs-b{
    font-weight: bold;
  }
  .c-y {
    color: rgb(106, 57, 6)
  }
  .c-b{
    color:rgb(29,28,31)
  }
  .c-g{
    color:rgb(165,169,185)
  }
  .c-l-y{
    color:rgb(212,182,116)
  }
  .c-l{
    color:rgb(255,255,255)
  }
  view{
    box-sizing: border-box;
  }
</style>
