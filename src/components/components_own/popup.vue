<style>
  .xpz_popup {
    position: absolute;
    outline: none;

  }

  .xpz_popup.top {
    top: -2.5em;
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
    border: 1px solid rgba(0, 0, 0,1);
    border-width: 10px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 1) transparent transparent;
    left: 50%;
    transform: translateX(-50%);
  }

  .xpz_popup_menu {
    background-color: rgba(0, 0, 0, 1);
    border-radius: 6px;
    padding: .2em;
  }

  .xpz_popup_menu_item {
    color: #eeeeee;
    overflow: auto;
    font-size: .8em;
  }

</style>
<template>
  <div class="xpz_popup" v-show="show" :class="align" >
    <li class="xpz_popup_menu">
      <div class="xpz_popup_menu_item">
        <slot></slot>
      </div>
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
    },
    methods: {
      test(){
        this.show = false;
      }
    }
  }
</script>
