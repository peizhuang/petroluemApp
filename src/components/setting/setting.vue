<style scoped></style>
<template>
  <div class="setting">
    <x-header :left-options="{backText:'返回',showBack:true}" style="background-color:deepskyblue;">
      <li>
        <span>设置</span>
      </li>
    </x-header>
  </div>
</template>
<script>
  import XHeader from 'vux/src/components/x-header'
  require('../../assets/css/common.css')
  export default {
    data (){
      return {}
    },
    components: {
      XHeader
    }
  }
</script>
