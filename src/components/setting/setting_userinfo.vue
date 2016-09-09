<style scoped>
  .userinfo {
    width: 100%;
    height: 100%;
    background-color: #F7F7F7;
    display: flex;
    flex-flow: column nowrap;
  }

  .flex {
    overflow: auto;
  }

  .disabled {
    opacity: .4;
  }


</style>
<template>
  <div class="userinfo">
    <x-header :left-options="{backText:'设置',showBack:true}" style="background-color:deepskyblue;">
      <li>
        <span>用户信息</span>
      </li>
      <a slot="right" @click="updateUserInfo" :class="{disabled:disabled}">完成</a>
    </x-header>
    <div class="flex">
      <group>
        <cell title="姓名" :value="name" primary="content"></cell>
        <cell title="员工编号" :value="employeeId" primary="content"></cell>
        <cell title="工龄" :value="workTime" primary="content">年</cell>
      </group>
      <group>
        <cell title="所属公司" :value="employeeCompany" primary="content"></cell>
        <cell title="所属部门" :value="employeeDepartment" primary="content"></cell>
        <cell title="职位" :value="position" primary="content"></cell>
      </group>
      <group>
        <cell title="性别" :value="sex" primary="content"></cell>
        <cell title="年龄" :value="age" primary="content"></cell>
        <x-input v-el:address title="地址" :value.sync="address" text-align="right" @on-change="disabled=false"></x-input>
        <x-input v-el:telephone title="电话" :value.sync="telephone" text-align="right"
                 @on-change="disabled=false"></x-input>
        <x-input v-el:mail title="邮箱" :value.sync="mail" text-align="right" @on-change="disabled=false"></x-input>
      </group>
    </div>
    <toast :show.sync="toastShow" type="warn" class="toast" :time="1500">{{toastText}}</toast>
  </div>
</template>
<script>
  /* import XHeader from 'vux/src/components/x-header'
   import Group from 'vux/src/components/group'
   import Cell from 'vux/src/components/cell'
   import XInput from 'vux/src/components/x-input'*/
  import {XHeader, Group, Cell, XInput, Toast} from  'vux/src/components'
  require('../../assets/css/common.css')
  export default {
    data (){
      return {
        name: "",
        employeeId: "",
        workTime: "",
        employeeCompany: "",
        employeeDepartment: "",
        position: "",
        sex: "",
        age: "",
        address: "",
        telephone: "",
        mail: "",
        disabled: true,
        toastShow: false,
        toastText: ""
      }

    },
    components: {
      XHeader,
      Group,
      Cell,
      XInput,
      Toast
    },
    methods: {
      updateUserInfo(){
        if (!this.disabled) {
          if (!this.telephone) {
            this.toastText = "电话不能为空，请重新输入",
              this.toastShow = true;
          } else if (!this.address) {
            this.toastText = "地址不能为空，请重新输入",
              this.toastShow = true;
          }
          else if (!this.mail) {
            this.toastText = "邮箱不能为空，请重新输入",
              this.toastShow = true;
          }
        }
      },
      checkChanged(val){

        console.log(val);

      }
    },
    route: {
      data(transition) {
        let vm = this;
        setTimeout(function () {
          vm.name = "向思齐";
          vm.address = "成都市";
          transition.next();
        }, 3000);

      }
    }
  }
</script>
