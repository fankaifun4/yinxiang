<style scoped lang="less">
  .wrap {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }

  .swiper-container {
    width: 100%;
    height: 910px;
  }

  .swiper-item {
    width: 100%;
    height: 100%;
    padding: 15px;
    box-sizing: border-box;
  }

  .card-container {
    width: 100%;
    height: 868px;
    background: #fff;
    border-radius: 36px;
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, .15);
  }

  .card-body {
    padding: 20px;
    .card-body-tag{
      font-size: 32px;
      color:rgb(106,57,6);
      display: flex;
      justify-content: space-between;
      align-items: center;
      .tag{
        line-height: 1;
      }
      .tips{
        width:30px;
        height: 30px;
      }
      .tips-lib{
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 20px;
        padding:10px 10px;
        flex: 1;
        border-radius: 4px;
        box-shadow: 0 0 4px 0 rgba(0,0,0,.25);
        margin-left: 20px;
        .t-x{
          color:rgb(119,119,119);
        }
        .t-p{
          color:rgb(119,119,119);
          display: flex;
          align-items: center;
          //margin-right: 25px;
          img{
            width:27.333px;
            height: 21.3333px;
          }
        }
      }
    }
  }

  .tag-list-wrap{
    margin-top:30px;
    height: 200px;
    overflow: hidden;
    .tag-scroll{
      height: 200px;
      display: flex;
      flex-wrap: wrap;
      padding: 5px;
      margin-left: -20px;
      margin-right:0px;
    }
  }
  .summary{
    color:rgb(106,57,6);
    font-size: 32px;
    font-weight: 700;
    margin-top:20px;
  }
  .summary-text{
    width:100%;
    height: 110px;
    margin-top:10px;
    font-size: 28px;
    color:#333;
  }
  .empty{
    color:#aaa !important;
  }
  .bt-after{
    width:650px;
    height:100px;
    margin:auto;
    margin-top:30px;
    border-radius: 24px;
    box-shadow: 0 0 13px 0 rgba(0,0,0,0.25);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left:30px;
    padding-right:64px;
    position: relative;
    font-size: 32px;
    .icon-right{
      width:18px;
      height: 33px;
      position: absolute;
      right: 30px;
      top:32px;
    }
    .bt-avart-wrap{
      position: relative;
      img{
        position: relative;
        margin-left: -30px;
        width:55px;
        height: 55px;
        float: left;
        border-radius: 55px;
        overflow: hidden;
      }
    }
  }

</style>
<template>
  <div class="wrap">
    <!--<swiper class="swiper-container" previous-margin="50rpx" next-margin="50rpx">-->
      <!--<block v-for="(item,index) in list" :key="key">-->
        <!--<swiper-item class="swiper-item">-->
          <!--<div class="card-container">-->
            <!--<p-card :cardinfo="item" :index="index" @collectChange="collectChange"></p-card>-->
            <!--<div class="card-body">-->
              <!--<div class="card-body-tag">-->
                <!--<div class="tag fs-b">标签</div>-->
                <!--&lt;!&ndash;<img class="tips" src="/static/images/tips@3x.png" alt=""  mode="widthFix" >&ndash;&gt;-->
                <!--<div class="tips-lib">-->
                  <!--<div class="t-x">支持热度：</div>-->
                  <!--<div class="t-p">10+ <img src="/static/images/huiq@3x.png" alt="" mode="aspectFit"></div>-->
                  <!--<div class="t-p">100+ <img src="/static/images/fq@3x.png" alt="" mode="aspectFit"></div>-->
                  <!--<div class="t-p">1K+ <img src="/static/images/lanq@3x.png" alt="" mode="aspectFit"></div>-->
                  <!--<div class="t-p">1W+ <img src="/static/images/hq@3x.png" alt="" mode="aspectFit"></div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<scroll-view scroll-y class="tag-list-wrap">-->
                <!--<div class="tag-scroll">-->
                  <!--<block v-for="(tag,key) in item.tags" :key="key">-->
                    <!--<tag :name="tag.name" :live="tag.live"></tag>-->
                  <!--</block>-->
                <!--</div>-->
              <!--</scroll-view>-->
              <!--<div class="card-body-summary">-->
                <!--<div class="summary">简介</div>-->
                <!--<div class="summary-text" :class="{empty:item.describe.length==0}" >{{item.describe.length>0?item.describe:'主人还没留下任何描述哦~'}}</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</swiper-item>-->
      <!--</block>-->
    <!--</swiper>-->
    <camera
      mode="scanCode"
      device-position="back"
      flash="off"
      binderror="error"
      bindscancode="takeCode"
      style="width: 100%; height: 300px;"
      scan-area="[0,0,200, 200]"
    ></camera>
    <button type="primary" bindtap="takePhoto">拍照</button>
    <div class="bt-after" @click="getScan">
      <div>附近</div>
      <div class="bt-avart-wrap">
        <img src="/static/images/1@3x.png" alt="" mode="widthFix">
        <img src="/static/images/2@3x.png" alt="" mode="widthFix">
        <img src="/static/images/3@3x.png" alt="" mode="widthFix">
      </div>
      <img class="icon-right" src="/static/images/right@3x.png" alt="">
    </div>
  </div>
</template>

<script>
  import pCard from '@/components/card'
  import tag from '@/components/tag'
  export default {
    data () {
      return {
        userInfo: {},
        noData: true,
        list: [
          {
            tags:[
              {name:'美少女',live:3},
              {name:'演员',live:4},
              {name:'小仙女',live:1},
              {name:'肥婆',live:2},
              {name:'花瓶',live:4}
            ],
            describe:'askljd aslkjd askljd aslkjd ',
            live: 1,
            name: '刘亦菲',
            addr: "长沙",
            job: "美女模特演员",
            collect: 1,
            avart: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/awhcrop%3D200%2C200/sign=4e66b67222738bd4d26bef62d3e4f7eb/9825bc315c6034a8ca0d712ec7134954082376b6.jpg'
          },
          {
            tags:[
              {name:'帅哥',live:3},
              {name:'天使吻过的喉咙',live:4},
              {name:'哥哥',live:1},
              {name:'香港音乐明星',live:2},
              {name:'演员',live:4}
            ],
            describe:'',
            live: 2,
            name: '张国荣',
            addr: "香港",
            job: "歌手，演员，帅哥",
            collect: 0,
            avart: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1543548135&di=b79c2baa9ebbf1500cf5edabdee6e2ae&src=http://pic.rmb.bdstatic.com/bb3611e864cb134900e4a6d5ec2bab8b.jpeg'
          },
          {
            tags:[
              {name:'帅哥',live:3},
              {name:'一头白发',live:4},
              {name:'很多钱',live:1},
              {name:'香港明星',live:2},
              {name:'导演，演员',live:4}
            ],
            describe:'',
            live: 3,
            name: '周星驰',
            addr: "香港",
            job: "导演，演员，喜剧，老头",
            collect: 1,
            avart: 'http://t11.baidu.com/it/u=535035850,2117723215&fm=173&app=25&f=JPEG?w=546&h=363&s=EDA02BD5D02A39159B209DAB0300E043'
          },
          {
            tags:[
              {name:'美女',live:3},
              {name:'超级大美女',live:4},
              {name:'美的不要不要的',live:1},
              {name:'香港明星',live:2},
              {name:'导演',live:4}
            ],
            live: 3,
            describe:'',
            name: '王祖贤',
            addr: "香港",
            job: "演员，喜剧",
            collect: 1,
            avart: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=c926ce42a1345982d187edc06d9d5ac8/ac6eddc451da81cb6720d9fb5e66d016082431c5.jpg'
          }
        ],
        isshow:false,
        src:''
      }
    },
    components: {
      pCard,
      tag
    },
    methods: {
      collectChange (data) {
        if (data.collect === 1) {
          this.list[data.index].collect = 0
        } else {
          this.list[data.index].collect = 1
        }
      },
      getScan(){
        wx.scanCode({
          scanType:['barCode'],
          success:function(res){
            let scan = res.result
          }
        })
      },
      takePhoto(){
        const ctx = wx.createCameraContext()
        ctx.takePhoto({
          quality: 'high',
          success: (res) => {
            this.setData({
              src: res.tempImagePath
            })
          }
        })
      },
      takeCode(res){
        console.log(res)
      }
    },
    created () {
      // 调用应用实例的方法获取全局数据
    }
  }
</script>


