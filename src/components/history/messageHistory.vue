<template>
  <div class="history">
    <x-header :left-options="{backText:'返回',showBack:show}" style="background-color:deepskyblue;">
      <a slot="right" v-link="{path:'/setting'}"><i class="fa fa-gear"></i></a>
      <li>
        <span>历史记录</span>
      </li>
    </x-header>

    <div class="item">
      <label>消息类型：</label>
      <li>
        <selector :options="list" :value.sync="test" @change="change"></selector>
      </li>
    </div>
    <!--<div class="item">
      <label></label>
      <li></li>
    </div>-->


  </div>
</template>
<style scoped>
  .history {
    background-color: #F7F7F7;
  }

  .item {
    margin-top: 1em;
  }
  .item > label {
    margin-left: .4em;
  }

  .item > li {
    border: 1px solid #cccccc;
    background-color: white;
    border-radius: 4px;
    margin-top: .2em;
  }
</style>
<script>
  import XHeader from 'vux/src/components/x-header'
  import Selector from 'vux/src/components/selector'
  require("../../assets/css/common.css")
  export default{
    data(){
      return {
        msg: 'hello vue',
        isReturnShow: true,
        list: [{key: "fake", value: "假警"}, {key: "normal", value: "一般险情"}, {key: "serious", value: "重大险情"}],
        test: ""
      }
    },
    components: {
      XHeader,
      Selector
    },
    methods: {
      change: function () {
        console.log(this.test);
      }
    }
  }
</script>
