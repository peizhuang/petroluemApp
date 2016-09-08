<template>
  <div class="list">
    <x-header :left-options="{backText:'返回',showBack:false,preventGoBack:true}" style="background-color:deepskyblue;">
      <a slot="left"><i class="fa fa-search"></i></a>
      <a slot="right" v-link="{path:'/setting'}"><i class="fa fa-gear"></i></a>
      <li class="xHeaderTitle">
        <span @click='setListType("general")' :class="{active:isGeneralShow}">通知消息</span><span
        @click='setListType("handle")' :class="{active:isHandleShow}">处理意见</span>
      </li>
    </x-header>

    <div class="flex listbody">
      <component :is="listType" v-touch:swipeleft="onSwipeRight" v-touch:swiperight="onSwipeLeft"
                 :transition="listTrans" class="view" keep-alive></component>
      <!-- <router-view v-touch:swipeleft="onSwipeRight" v-touch:swiperight="onSwipeLeft"
                    :transition="listTrans" class="view"></router-view>-->
    </div>

  </div>
</template>

<script>
  import {currentContent, list_type} from '../../store/getter'
  import {setListType} from '../../store/action'
  import Alert from 'vux/src/components/alert'
  import XHeader from 'vux/src/components/x-header'
  import General from './list_general.vue'
  import Handle from './list_handle.vue'
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
        isHandleShow: false
      }
    },
    vuex: {
      getters: {
        currentContent,
        listType: list_type
      },
      actions: {
        setListType
      }
    },
    components: {
      Alert,
      XHeader,
      General,
      Handle
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

      //todo 左右滑动有bug，快速左右滑动到时候会出现滑动事件失效
      onSwipeRight (){
        this.listTrans = "rightToLeft";
        this.setListType("handle");
//        this.$router.go("/list/handle");
      },
      onSwipeLeft (){
        this.listTrans = "leftToRight";
        this.setListType("general");
//        this.$router.go("/list/general");
      }
    },
    watch: {
      listType (val, oldvalue) {
        if (val == "general") {
          this.isGeneralShow = true;
          this.isHandleShow = false;
        } else {
          this.isHandleShow = true;
          this.isGeneralShow = false;
        }
      }
    },
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
    animation: leftToRightEnter .3s;
  }

  .leftToRight-leave {
    animation: leftToRightLeave .3s;
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
    animation: rightToLeftEnter .3s;
  }

  .rightToLeft-leave {
    animation: rightToLeftLeave .3s;
  }

</style>
