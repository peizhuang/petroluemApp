<template>
  <div class="feedback">
    <x-header :left-options="{backText:'返回',showBack:isReturnShow}" style="background-color:deepskyblue;">
      <a slot="right" v-link="{path:'/setting'}"><i class="fa fa-gear"></i></a>
      <li>
        <span>消息反馈</span>
      </li>
    </x-header>

  </div>
</template>
<style scoped>
  .feedback {
    background-color: #eeeeee;
  }
</style>
<script>
  import XHeader from 'vux/src/components/x-header'
  require("../../assets/css/common.css")
  export default{
    data(){
      return {
        isReturnShow: false
      }
    },
    components: {
      XHeader
    }
  }
</script>
