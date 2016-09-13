<style>
  .xpz_chat_content {
    position: relative;
    margin: .5em .8em;
    display: flex;
  }

  .xpz_chat_content_reverse {
    flex-direction: row-reverse;
  }

  .xpz_head {
    border-radius: 50%;
    width: 2.6em;
    height: 2.6em;
    background-color: green;
    display: inline-block;
  }

  .xpz_head img {
    width: 100%;
    position: relative;
    border-radius: 50%
  }

  .xpz_head_slot {
    width: 100%;
    position: relative;
    border-radius: 50%
  }

  .xpz_chat {
    flex: 1;
    display: inline-block;
    vertical-align: bottom;
    margin-left: .5em;
    position: relative;
    /*max-width: 100%;*/

  }

  .xpz_chat_content_reverse .xpz_chat {
    text-align: right;
    margin-right: .5em;
  }

  .xpz_chat_name {
    margin-bottom: .3em;
    font-size: .8em;
    color: #999999;
    display: block;
  }

  .xpz_chat_message {
    display: inline-block;
    padding: .6em;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;;
  }

  .xpz_chat .self {
    background-color: #FFF5E4;
    color: #353535;
  }

  .xpz_chat .other {
    background-color: #139eff;
    color: #fafafc;
  }
</style>
<template>
  <div class="xpz_chat_content" :class="{xpz_chat_content_reverse:type=='self'}">
    <span class="xpz_head" @click="$dispatch('on-click-head')">
        <slot name="head"></slot>
    </span>
    <span class="xpz_chat">
      <span class="xpz_chat_name" v-show="showName">{{name}}</span>
      <span class="xpz_chat_message" :class="type" :style="{background:back,color:color}"
            @click="$dispatch('on-click-message',value)">
        <slot></slot>
      </span>
      <popup align="top" :show="true"></popup>
    </span>
  </div>
</template>
<script>
  import Popup from './popup.vue'
  export  default {
    data(){
      return {}
    },
    props: {
      //聊天记录类型，包括self和other
      type: {
        type: String,
        default: "self"
      },
      //文字背景
      back: {
        type: String
      },
      //文字颜色
      color: {
        type: String
      },
      //是否显示名称
      showName: {
        type: Boolean,
        default: false
      },
      //聊天记录时显示的用户名
      name: {
        type: String
      },
      //在点击消息的时候，将该值传给父组件
      value: {
        type: Object
      }
    },
    methods: {},
    components: {
      Popup
    }
  }
</script>
