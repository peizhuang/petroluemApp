<template>
  <div class="history">
    <x-header :left-options="{backText:'返回',showBack:show}" style="background-color:deepskyblue;">
      <a slot="right" v-link="{path:'/setting'}"><i class="fa fa-gear"></i></a>
      <li>
        <span>历史记录</span>
      </li>
    </x-header>
    <div class="flex">
      <group>
        <selector :options="list" @on-change="change"
                  title="消息类型" :value.sync="alarmType"></selector>
      </group>

      <group>
        <datetime
          title="起始日期"
          format="YYYY-MM-DD HH:mm"
          placeholder="请选择开始日期 "
          :min-year=2000
          :max-year=2050
          :value.sync="startDate"
          confirm-text="确定"
          cancel-text="取消"
          year-row="{value}年"
          month-row="{value}月"
          day-row="{value}日"
          hour-row="{value}点"
          minute-row="{value}分">
        </datetime>
        <datetime
          title="结束日期"
          format="YYYY-MM-DD HH:mm"
          placeholder="请选择结束日期 "
          :min-year=2000
          :max-year=2050
          :value.sync="endDate"
          confirm-text="确定"
          cancel-text="取消"
          year-row="{value}年"
          month-row="{value}月"
          day-row="{value}日"
          hour-row="{value}点"
          minute-row="{value}分">
        </datetime>
      </group>

      <x-button type="plain" text="查询" class="search" @click="search"></x-button>
    </div>


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
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  }

  .search {
    margin-top: 1em;
    width: 96%;
    background-color: #00ACFF;
  }
</style>
<script>
  import XHeader from 'vux/src/components/x-header'
  import Selector from 'vux/src/components/selector'
  import Group from 'vux/src/components/group'
  import Datetime from 'vux/src/components/datetime'
  import XButton from 'vux/src/components/x-button'
  require("../../assets/css/common.css")
  export default{
    data(){
      return {
        isReturnShow: true,
        list: [{key: "fake", value: "假警信息查询"}, {key: "normal", value: "一般险情信息查询"}, {key: "serious", value: "重大险情信息查询"}],
        alarmType: "fake",
        startDate: "",
        endDate: ""
      }
    },
    components: {
      XHeader,
      Selector,
      Group,
      Datetime,
      XButton
    },
    methods: {
      change: function () {
        console.log(this.alarmType);
      },
      search: function () {
        console.log("alarmType:" + this.alarmType + "\n startDate:" + this.startDate + "\n endDate:" + this.endDate);
      }
    }
  }
</script>
