<style>
  .xpz_popup {
    position: absolute;

  }

  .xpz_popup.top {
    top: 0;
  }

  .xpz_popup.left {
    left: 0;
  }

  .xpz_popup.right {
    right: 0
  }

  .xpz_popup.bottom {
    bottom: 0;
  }

  .xpz_popup.top .xpz_popup_menu:before {
    content: "";
    position: absolute;
    /* width: 6px; */
    /* height: 6px; */
    top: -20px;
    border-bottom: 5px solid black;
    border-right: 5px solid black;
    border-top: 5px solid transparent;
    border-left: 5px solid transparent;
    /* border: 1px solid black; */
    /* -webkit-transform: rotate(90deg); */
    background-color: black;
  }

  .xpz_popup_menu {
    background-color: black;
    border-radius: 1em;
  }

  .xpz_popup_menu_item {
    padding: .5em;
    color: #F7F7F7;
  }

</style>
<template>
  <div class="xpz_popup" :v-show="show" :class="align">
    <li class="xpz_popup_menu">
      <span class="xpz_popup_menu_item">测试</span>
    </li>
  </div>
</template>
<script>
  export  default {
    data(){
      return {}

    },
    props: {
      show: {
        type: Boolean,
        default: false
      },
      align: {
        type: String,
        default: "top"
      }
    }
  }
</script>
