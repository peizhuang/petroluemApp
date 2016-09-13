<style scoped>
  .xpz_modal {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: auto;
    display: flex;
  }

  .xpz_modal_back {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .6);
  }

  .xpz_modal_content {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    position: relative;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    background-color: #ffffff;

    /* -webkit-box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, .8);
     -moz-box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, .8);
     box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, .8);*/
  }

  .normal {
    margin: 1em 2em;
    justify-content: center;
    align-self: center;
    max-height: 86%;
  }

  .xpz_modal_header {
    padding: .6em .8em;
    border-bottom: 1px solid #cccccc;
  }

  /*  .xpz_modal_header h1 {
      display: inline-block;
    }*/

  .xpz_modal_body {
    padding: .5em .8em;
    overflow: auto;
    flex: 1;
  }

  .xpz_modal_footer {
    font-size: .8em;
    padding: 1.2em .8em;
    border-top: 1px solid #cccccc;
    text-align: right;
  }

  .xpz_modal_footer > span {
    border-radius: 4px;
    padding: .5em .8em;
  }

  .xpz_modal_footer_cancel {
    border: 1px solid #cccccc;
    color: #222222;
  }

  .xpz_modal_footer_cancel:active {
    border-color: #C2C2C2;
    background-color: #C2C2C2;
  }

  .xpz_modal_footer_submit {
    border: 1px solid #04BE02;
    background-color: #04BE02;
    color: white;
  }

  .xpz_modal_footer_submit:active {
    border-color: #04A302;
    background-color: #04A302;
  }

  .fade_back-transition {
    transition: opacity .3s;
  }

  .fade_back-enter {
    opacity: 1;
  }

  .fade_back-leave {
    opacity: 0;
  }

  .fade-transition {
    transition: transform .3s;
  }

  .fade-enter {
    transform: scale(1.2);
  }

  .fade-leave {
    transform: scale(1);
  }

</style>
<template>
  <div class="xpz_modal" v-show="show" transition="fade_back">
    <div class="xpz_modal_back"></div>
    <div class="xpz_modal_content" :class="type" v-show="show" transition="fade">
      <div class="xpz_modal_header">
        <h1>
          <slot name="title" replace="true" style="display: inline-block"></slot>
          <span>{{title}}</span>
        </h1>
      </div>
      <div class="xpz_modal_body">
        <slot></slot>
      </div>
      <div class="xpz_modal_footer">
        <span class="xpz_modal_footer_cancel" @click="show=false"><span><slot
          name="cancel"></slot>{{footer.cancel}}</span></span>
        <span class="xpz_modal_footer_submit" @click="$dispatch('on-submit')"><slot name="submit"></slot><span>{{footer.submit}}</span></span>
      </div>
    </div>

  </div>
</template>
<script>
  export  default {
    data(){
      return {}

    },
    props: {
      type: {
        type: String,
        default: "normal"
      },
      title: {
        type: String,
        default: "Title"
      },
      footer: {
        type: Object,
        default: {
          cancel: {
            type: String,
            default: "cancel"
          },
          submit: {
            type: String,
            default: "submit"
          }
        }
      },
      show: {
        type: Boolean,
        default: false
      }
    }
  }

</script>
