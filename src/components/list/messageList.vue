<template>
  <div class="list">
    <x-header :left-options="{backText:'返回',showBack:false,preventGoBack:true}" style="background-color:deepskyblue;">
      <a slot="left" @click="searchShow=true"><i class="fa fa-search"></i></a>
      <a slot="right" v-link="{path:'/setting'}"><i class="fa fa-gear"></i></a>
      <li class="xHeaderTitle">
        <span @click='swiperIndex=0' :class="{active:isGeneralShow}">通知消息</span><span
        @click='swiperIndex=1' :class="{active:isHandleShow}">处理意见</span>
      </li>
    </x-header>
    <div class="flex listbody">
      <swiper class="view" :index.sync="swiperIndex" height="100%" :show-dots="false">
        <swiper-item class="swiperitem">
          <general class="swiperitem"></general>
        </swiper-item>
        <swiper-item class="swiperitem">
          <handle class="swiperitem"></handle>
        </swiper-item>
      </swiper>
      <!-- <component :is="listType" v-touch:swipeleft="onSwipeRight" v-touch:swiperight="onSwipeLeft"
                  :transition="listTrans" class="view" keep-alive></component>-->
      <!-- <router-view v-touch:swipeleft="onSwipeRight" v-touch:swiperight="onSwipeLeft"
                    :transition="listTrans" class="view"></router-view>-->
    </div>

    <modal title="Title" :footer="{cancel:'取消',submit:'提交'}" :show.sync="searchShow" @on-submit="">
      <span slot="title"><i class="fa fa-twitter"></i></span>
      <div>
        <group title="消息类型">
          <radio :options="options" :value.sync="searchType" @on-change="searchTypeChange"></radio>
        </group>
        <group title="消息确认">
          <radio :options="messageComfirmType" :value.sync="comfirmType"></radio>
        </group>
        <group title="查询时间">
          <datetime
            title="起始日期"
            format="YYYY-MM-DD HH:mm"
            placeholder="请选择开始日期 "
            :min-year=2000
            :max-year=2050
            :value.sync="startDate"
            confirm-text="确定"
            cancel-text="取消"
            year-row="{value}年"
            month-row="{value}月"
            day-row="{value}日"
            hour-row="{value}点"
            minute-row="{value}分">
          </datetime>
          <datetime
            title="结束日期"
            format="YYYY-MM-DD HH:mm"
            placeholder="请选择开始日期 "
            :min-year=2000
            :max-year=2050
            :value.sync="endDate"
            confirm-text="确定"
            cancel-text="取消"
            year-row="{value}年"
            month-row="{value}月"
            day-row="{value}日"
            hour-row="{value}点"
            minute-row="{value}分">
          </datetime>
        </group>
      </div>
    </modal>

  </div>
</template>

<script>
  import {} from '../../store/getter'
  import {setListType} from '../../store/action'
  import Alert from 'vux/src/components/alert'
  import XHeader from 'vux/src/components/x-header'
  import Swiper from 'vux/src/components/swiper'
  import SwiperItem from 'vux/src/components/swiper-item'
  import Dialog from 'vux/src/components/dialog'
  import Group from 'vux/src/components/group'
  import Radio from 'vux/src/components/radio'
  import Datetime from 'vux/src/components/datetime'
  import General from './list_general.vue'
  import Handle from './list_handle.vue'
  import Modal from '../components_own/modal.vue'
  require('../../assets/css/common.css')


  export default {
    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        show: false,
        listTrans: "leftToRight",
        isGeneralShow: true,
        isHandleShow: false,
        swiperIndex: 0,
        searchShow: false,
        options: [{key: "general", value: "普通消息"}, {key: "handle", value: "处理意见"}],
        messageComfirmType: [{key: "all", value: "全部"}, {key: "comfirmed", value: "已确认"}, {
          key: "notConfirmed",
          value: "未确认"
        }],
        searchType: "general",
        comfirmType: "all",
        startDate: "",
        endDate: ""

      }
    },
    vuex: {
      getters: {},
      actions: {}
    },
    components: {
      Alert,
      XHeader,
      General,
      Handle,
      Swiper,
      SwiperItem,
      Dialog,
      Modal,
      Group,
      Radio,
      Datetime
    },
    methods: {
      login (){
        this.$http.post("http://192.168.1.189:8000/login", {username: 'admin', password: '123'}).then((data)=> {
          console.log(JSON.stringify(data));
        }, (error)=> {
          console.log(JSON.stringify(error));
        });
      },
      req (){
        this.$http.post("http://192.168.1.189:8000/project/projectman/getreportbyid", {id: "123465"}).then((data)=> {
          console.log(JSON.stringify(data));
        }, (error)=> {
          console.log(JSON.stringify(error));
        });
      },

      /*  //todo 左右滑动有bug，快速左右滑动到时候会出现滑动事件失效
       onSwipeRight (){
       this.listTrans = "rightToLeft";
       },
       onSwipeLeft (){
       this.listTrans = "leftToRight";
       }*/
      searchTypeChange (value){
        console.log(value);
      }
    },
    watch: {
      swiperIndex (val, oldvalue) {
        if (val == 0) {
          this.isGeneralShow = true;
          this.isHandleShow = false;
        } else {
          this.isHandleShow = true;
          this.isGeneralShow = false;
        }
      }
    }
    /*
     route: {
     data: function (transition) {
     if (this.$route.name == "general") {
     this.$router.go("/list/general");
     }
     else if (this.$route.name == "handle") {
     this.$router.go("/list/handle");
     }
     else if (this.listType == "general") {
     this.$router.go("/list/general");
     }
     else if (this.listType == "handle") {
     this.$router.go("/list/handle");
     }
     else
     transition.next();
     }
     }*/
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .list {
    background-color: #F7F7F7;
  }

  .title {
    display: flex;
  }

  .listbody {
    position: relative;
  }

  .listbody .view {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .listbody .view .vux-swiper .swiperitem {
    width: 100% !important;
    height: 100% !important;
  }

  @keyframes leftToRightEnter {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(0);
    }

  }

  @keyframes leftToRightLeave {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }

  }

  .leftToRight-transition {
    display: block;
  }

  .leftToRight-enter {
    animation: leftToRightEnter .2s;
  }

  .leftToRight-leave {
    animation: leftToRightLeave .2s;
  }

  @keyframes rightToLeftEnter {
    0% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(0);
    }

  }

  @keyframes rightToLeftLeave {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }

  }

  .rightToLeft-transition {
    display: block;
  }

  .rightToLeft-enter {
    animation: rightToLeftEnter .2s;
  }

  .rightToLeft-leave {
    animation: rightToLeftLeave .2s;
  }

</style>
