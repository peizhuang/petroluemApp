<template>
  <div id="app">
    <router-view class="content" keep-alive></router-view>

    <myfooter v-show="isFooterShow" class="myfooter" :current-content="currentContent"></myfooter>
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
    replace: false,
    components: {

      myfooter
    },
    store: store,
    vuex: {
      getters: {
        currentContent: getter.currentContent,
        isFooterShow: getter.isFooterShow,
        list_test: getter.list_test,
        history_test: getter.history_test,
        feedback_test: getter.feedback_test,
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
       e.stopPropagation();
       if (!$(".setting").hasClass("hidden")) {
       if ($("#myModal").hasClass("in")) {
       myModal.modal("hide");
       return;
       }
       switch (currentPage) {
       case "settingIndex":
       if ($("#myModal").hasClass("in")) {
       myModal.modal("hide");
       return;
       }
       $("#indexPublic ").tap();
       break;
       case  "userDetailsPage":
       $("#userDetailsReturn").tap();
       break;
       case  "helpPage":
       $("#helpReturn").tap();
       break;
       case "aboutPage":
       $("#aboutReturn").tap();
       break;
       case "changePasswordPage":
       $("#changePasswordReturn").tap();
       break;
       }
       }
       else {
       if (currentMenuItem == "pageReceive") {
       if ($(".dw-modal").length == 1) {
       $(".dwb-c span").click();
       }
       else if (!myModalQuery.hasClass("hidden")) {
       myModalQuery.myModalHide();
       }
       else if ($("#pageQuery").hasClass("pageActivity")) {
       returnPageReceive();
       }
       else {
       //todo 退出app
       }
       }
       else if (currentMenuItem == "pageFeedback") {
       if ($("#feedbackReturn>a").hasClass("hidden")) {
       //todo 退出app
       }
       else {
       var panel2Page = $($("#panel2").get(0).contentWindow.document.body);
       if (panel2Page.find(".dw-modal").length == 1) {
       panel2Page.find(".dwb-c span").click();
       } else if (panel2Page.find(".myselectMenu").length > 0 && !panel2Page.find(".myselectMenu").hasClass("hidden")) {
       panel2Page.find(".myselectMenu").addClass("hidden");
       }
       else {
       feedbackReturn.tap();
       }
       }

       }
       else {
       var panel3Page = $($("#panel3").get(0).contentWindow.document.body);
       if ($("#historyReturn>a").hasClass("hidden")) {
       //todo 退出app
       if (!panel3Page.find(".myselectMenu").hasClass("hidden")) {
       panel3Page.find(".myselectMenu").addClass("hidden");
       }
       else if (panel3Page.find(".dw-modal").length == 1) {
       panel3Page.find(".dwb-c span").click();
       }
       else {
       //todo 退出app
       }
       } else {
       if (panel3Page.find(".contentLayer").hasClass("contentLayerShow")) {
       panel3Page.find(".contentLayer").removeClass("contentLayerShow");
       panel3Page.find(".content").fadeOut("fast");
       }

       else {
       historyReturn.tap();
       }
       }
       }
       }
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
</style>
