<template>
  <div id="app">
    <router-view class="content" keep-alive></router-view>

    <myfooter v-show="isFooterShow" class="myfooter" :current-content="currentContent"></myfooter>
    <toast :show.sync="toastShow" @on-hide="onHide" type="text" :time="60000">再按一次退出</toast>
  </div>
</template>

<script>
  import  Toast from 'vux/src/components/toast'
  import myfooter from 'components/footer'
  import store from './store/store'
  import * as getter from './store/getter'
  import $ from 'jquery'
  require('assets/font-awesome.min.css');

  export default {
    data(){
      return {
        toastShow: false
      }
    },
    replace: false,
    components: {
      myfooter,
      Toast
    },
    store: store,
    vuex: {
      getters: {
        currentContent: getter.currentContent,
        isFooterShow: getter.isFooterShow,
        history_test: getter.history_test,
        feedback_test: getter.feedback_test,
      }
    },
    props: {},
    methods: {
      onHide (){
        //toast退出时执行
      }
    },
    events: {
      'contentChanged': function (currentContent) {
        // 事件回调内的 `this` 自动绑定到注册它的实例上
        this.currentContent = currentContent;
      }
    },
    ready: function () {
      var vm = this;

      function onOffline() {
        alert("offline");
      }

      function online() {
        alert("online");
      }

      function onBackKeyDown(e) {
        try {
          var url = vm.$route.path;
          if (vm.toastShow) {
            navigator.app.exitApp();
          }
          else if (url != "/list" && url != "/feedback" && url != "/history")
            window.history.back();
          else {
            vm.toastShow = true;
          }
        } catch (e) {
          console.log(e);
        }
      }


      function onPause() {
        backforword = true;
      }

      function onResume() {

      }


      function onDeviceReady() {
        document.addEventListener("offline", onOffline, false);
        document.addEventListener("online", online, false);
        document.addEventListener("backbutton", onBackKeyDown, false);
        alert("ready,cordova is usefull");
      }

      document.addEventListener("deviceready", onDeviceReady, false);

    }
  }
</script>

<style scoped>
  #app {
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    overflow: hidden;
  }

  .content {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
  }

  .myfooter {

  }

  .fade-transition {

  }

  .fade-enter {

  }

  .fade-leave {

  }

  .weui_toast {
    bottom: 7em !important;
    top: inherit !important;
  }

</style>
