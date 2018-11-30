<style scoped lang="less">
  .card-header {
    font-weight: 300;
    height: 360px;
    position: relative;
    .card-current {
      width: 100%;
      height: 360px;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
    }

    .card-item-wrap {
      position: absolute;
      height: 360px;
      left: 0;
      top: 0;
      right: 0;
      z-index: 2;
      box-sizing: border-box;
      padding: 20px 30px;

      .c-i-h {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .c-i-liv {
          width: 108px;
          height: 49.333px;
          position: relative;

          img {
            width: 108px;
            height: 49.333px;
            position: absolute;
            left: 0;
            top: 0;
          }

          .c-i-live-n {
            width: 100%;
            height: 30px;
            position: absolute;
            bottom: 0;
            left: 0;
            font-size: 20px;
            text-align: right;
            line-height: 32px;
            padding-right: 10px;
          }

        }
        .c-i-avart {
          margin-top: 30px;
          flex: 1;
          height: 180px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          flex-shrink: 0;
          img {
            width: 120px;
            height: 120px;
            border-radius: 100%;
            overflow: hidden;
            flex-shrink: 0;
          }
          .c-i-name {
            font-size: 30px;
            margin-top: 13px;
          }

        }
        .c-i-share {
          width: 108px;
          height: 32px;
          display: flex;
          justify-content: flex-end;

          img {
            width: 32px;
            height: 32px;
          }

        }
      }
      .c-i-b {

        .c-i-b-ad {
          display: flex;
          align-items: center;

          .addr {
            width: 26px;
            height: 36px;
            margin-right: 10px;
          }

          .addr-txt {
            font-size: 30px;
          }

        }
        .c-i-b-l {
          margin-top: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .c-l-j {
            display: flex;
            align-items: center;
            .c-l-ld {
              width: 17px;
              height: 40px;
              margin-right: 23px;
              margin-left:3px;
            }

            .c-l-jt {
              max-width: 300px;
              overflow: hidden;
              font-size: 30px;
              text-overflow: ellipsis;
              white-space: nowrap;
            }

          }
        }
        .c-l-f {
          display: flex;
          justify-content: center;
          align-items: center;

          .c-l-sc {
            width: 36px;
            height: 36px;
            margin-right: 10px;
          }

          .c-l-sc-txt {
            font-size: 30px;
          }

        }
      }
    }
    .c-l-1{
      color:#fff;
    }
    .c-l-2{
      color:#e6cb8c;
    }
    .c-l-3{
      color: #6a3906;
    }
  }
</style>
<template>
    <div>
      <div  v-if="cardinfo.live==1" class="card-header">
        <img class="card-current" src="/static/images/card-1@3x.png" alt="">
        <div class="card-item-wrap">
          <div class="c-i-h">
            <div class="c-i-liv">
              <img src="/static/images/dj_1@3x.png" alt="">
              <div class="c-i-live-n c-g">LV10</div>
            </div>
            <div class="c-i-avart">
              <img v-if="cardinfo.avart==''" src="/static/images/avart@3x.png" alt="" mode="aspectFill">
              <img v-else :src="cardinfo.avart" alt="" mode="aspectFill">
              <div class="c-i-name c-l-1">{{cardinfo.name}}</div>
            </div>
            <div class="c-i-share">
              <img  src="/static/images/fx_1@3x.png" alt="">
            </div>
          </div>
          <div class="c-i-b">
            <div class="c-i-b-ad">
              <img class="addr"  src="/static/images/addr-1@3x.png" alt="">
              <div   class="addr-txt c-l-1">{{cardinfo.addr}}</div>
            </div>
            <div class="c-i-b-l">
              <div class="c-l-j">
                <img class="c-l-ld"   src="/static/images/zw-1@3x.png" alt="">
                <div  class="c-l-jt  c-l-1">{{cardinfo.job}}</div>
              </div>
              <div class="c-l-f" @click="collection" >
                <img class="c-l-sc" v-if="cardinfo.collect==0" src="/static/images/sc-1@3x.png" alt="">
                <img class="c-l-sc" v-if="cardinfo.collect==1" src="/static/images/sc-1-act@3x.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div  v-if="cardinfo.live==2" class="card-header">

        <img class="card-current"  src="/static/images/card-2@3x.png" alt="">
        <div class="card-item-wrap">
          <div class="c-i-h">
            <div class="c-i-liv">
              <img  src="/static/images/dj_2@3x.png" alt="">
              <div  class="c-i-live-n c-b">LV10</div>
            </div>
            <div class="c-i-avart">
              <img v-if="cardinfo.avart==''" src="/static/images/avart@3x.png" alt="" mode="aspectFill">
              <img v-else :src="cardinfo.avart" alt="" mode="aspectFill">
              <div   class="c-i-name c-l-2">{{cardinfo.name}}</div>
            </div>
            <div class="c-i-share">
              <img  src="/static/images/fx_2@3x.png" alt="">
            </div>
          </div>
          <div class="c-i-b">
            <div class="c-i-b-ad">
              <img class="addr"  src="/static/images/addr-2@3x.png" alt="">
              <div   class="addr-txt c-l-2">{{cardinfo.addr}}</div>
            </div>
            <div class="c-i-b-l">
              <div class="c-l-j">
                <img class="c-l-ld"   src="/static/images/zw-2@3x.png" alt="">
                <div   class="c-l-jt  c-l-2">{{cardinfo.job}}</div>
              </div>
              <div class="c-l-f" @click="collection">
                <img class="c-l-sc" v-if="cardinfo.collect==0" src="/static/images/sc-2@3x.png" alt="">
                <img class="c-l-sc" v-if="cardinfo.collect==1" src="/static/images/sc-2-act@3x.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div  v-if="cardinfo.live==3"  class="card-header">
        <img class="card-current"  src="/static/images/card-3@3x.png" alt="">
        <div class="card-item-wrap">
          <div class="c-i-h">
            <div class="c-i-liv">
              <img  src="/static/images/dj_3@3x.png" alt="">
              <div  class="c-i-live-n c-l-y">LV10</div>
            </div>
            <div class="c-i-avart">
              <img v-if="cardinfo.avart==''" src="/static/images/avart@3x.png" alt="" mode="aspectFill">
              <img v-else :src="cardinfo.avart" alt="" mode="aspectFill">
              <div   class="c-i-name c-l-3">{{cardinfo.name}}</div>
            </div>
            <div class="c-i-share">
              <img  src="/static/images/fx_3@3x.png" alt="">
            </div>
          </div>
          <div class="c-i-b">
            <div class="c-i-b-ad">
              <img class="addr"  src="/static/images/addr-3@3x.png" alt="">
              <div   class="addr-txt c-l-3">{{cardinfo.addr}}</div>
            </div>
            <div class="c-i-b-l">
              <div class="c-l-j">
                <img class="c-l-ld"   src="/static/images/zw-3@3x.png" alt="">
                <div   class="c-l-jt  c-l-3">{{cardinfo.job}}</div>
              </div>
              <div class="c-l-f"  @click="collection" >
                <img class="c-l-sc" v-if="cardinfo.collect==0" src="/static/images/sc-3@3x.png" alt="">
                <img class="c-l-sc" v-if="cardinfo.collect==1" src="/static/images/sc-3-act@3x.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  export  default {
    props: ['cardinfo','index'],
    name:'pCard',
    data(){
      return {
      }
    },
    mounted(){
    },
    methods:{
      collection(){
        this.$emit('collectChange',{collect:this.cardinfo.collect,index:this.index})
      }
    }
  }
</script>


