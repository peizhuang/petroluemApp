<style>
  .xpz_popup {
    position: absolute;

  }

  .xpz_popup.top {
    top: -2em;
    left: 50%;
    transform: translateX(-50%);
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
    width: 0;
    height: 0;
    bottom: -1em;
    border: 1px solid black;
    border-width: 10px;
    border-style: solid;
    border-color: black transparent transparent;
    left: 50%;
    transform: translateX(-50%);
  }

  .xpz_popup_menu {
    background-color: black;
    border-radius: 1em;
    padding: .2em;
  }

  .xpz_popup_menu_item {
    padding: .5em;
    color: #F7F7F7;
  }

</style>
<template>
  <div class="xpz_popup" v-show="show" :class="align">
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
    },
    watch: {
      show (val){
        if (val == true) {
          this.$dispatch("on-show");
        } else {
          this.$dispatch("on-hide");
        }
      }
    },
    events: {
      hidePopup(){
        this.show = false;
      }
    }
  }
</script>
