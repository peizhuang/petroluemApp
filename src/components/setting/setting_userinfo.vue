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
</style>
<template>
  <div class="userinfo">
    <x-header :left-options="{backText:'设置',showBack:true}" style="background-color:deepskyblue;">
      <li>
        <span>用户信息</span>
      </li>
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
        <cell title="地址" :value="address" primary="content"></cell>
        <cell title="电话" :value="telephone" primary="content"></cell>
        <cell title="邮箱" :value="mail" primary="content"></cell>
      </group>
      <group>
        <cell title="关于" is-link @click="">
          <slot><i class="fa "></i></slot>
        </cell>
      </group>

    </div>
  </div>
</template>
<script>
  import XHeader from 'vux/src/components/x-header'
  import Group from 'vux/src/components/group'
  import Cell from 'vux/src/components/cell'
  require('../../assets/css/common.css')
  export default {
    data (){
      return {
        name: "向思齐",
        employeeId: "1654512",
        workTime: "3",
        employeeCompany: "成华区分公司",
        employeeDepartment: "维修部",
        position: "未知",
        sex: "男",
        age: "23",
        address: "成都市高新区",
        telephone: "13496452122",
        mail: "dfhkoa@163.com"
      }

    },
    components: {
      XHeader,
      Group,
      Cell
    }
  }
</script>
