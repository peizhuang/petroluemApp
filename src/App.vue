<template>
  <div id="app">
    <router-view class="content" keep-alive></router-view>

    <myfooter class="myfooter" :current-content="currentContent"></myfooter>
  </div>
</template>

<script>

  import myfooter from 'components/footer'
  import store from './store/store'
  import * as getter from './store/getter'
  import $ from 'jquery'
  require('assets/font-awesome.min.css');

  export default {
    data(){
      return {
//        currentContent: "messageList"
      }
    },
    replace:false,
    components: {

      myfooter
    },
    store: store,
    vuex: {
      getters: {
        currentContent: getter.currentContent,
        list_test: getter.list_test,
        history_test: getter.history_test,
        feedback_test: getter.feedback_test
      }
    },
    props: {},
    events: {
      'contentChanged': function (currentContent) {
        // 事件回调内的 `this` 自动绑定到注册它的实例上
        this.currentContent = currentContent;
      }
    },
    ready: function () {
      function onOffline() {
        alert("offline");
      }

      function online() {
        alert("online");
      }

      function onBackKeyDown(e) {
        e.stopPropagation();
        alert("backkey");
      }

      /*      /!*按返回按钮产生的动作*!/
       function onBackKeyDown(e) {


       }



       function onPause() {
       backforword = true;
       }

       function onResume() {
       cordova.plugins.notification.local.clearAll(function () {

       }, this);
       backforword = false;
       }*/

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

<style>
  * {
    margin: 0;
    padding: 0;
  }

  li, ul {
    list-style: none;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-size: 1em;
  }

  #app {
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
  }

  .content {
    flex: 1;
  }

  .myfooter {

  }

  .fade-transition {

  }

  .fade-enter {

  }

  .fade-leave {

  }
</style>
