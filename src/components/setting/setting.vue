<style scoped>
  .logout {
    margin-top: 1em;
    width: 96%;
  }

  .settingChild {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 999;
    top: 0;
    left: 0;
  }
</style>
<template>
  <div class="setting">
    <x-header :left-options="{backText:'返回',showBack:true}" style="background-color:deepskyblue;">
      <li>
        <span>设置</span>
      </li>
    </x-header>
    <div class="flex">
      <group>
        <cell title="员工信息" is-link @click="" v-link="{path:'/setting/userinfo'}">
          <slot><i class="fa fa-user"></i></slot>
        </cell>
        <cell title="密码修改" is-link @click="">
          <slot><i class="fa fa-key"></i></slot>
        </cell>
      </group>
      <group>
        <cell title="关于" is-link @click="">
          <slot><i class="fa "></i></slot>
        </cell>
      </group>

      <x-button type="warn" class="logout">退出登录</x-button>
    </div>

    <router-view keep-alive class="settingChild"></router-view>


  </div>
</template>
<script>
  import XHeader from 'vux/src/components/x-header'
  import Group from 'vux/src/components/group'
  import XButton from 'vux/src/components/x-button'
  import Cell from 'vux/src/components/cell'
  import {setFooterShow} from '../../store/action'
  require('../../assets/css/common.css')
  export default {
    data (){
      return {}
    },
    components: {
      XHeader,
      Group,
      XButton,
      Cell
    },
    vuex: {
      actions: {
        setFooterShow
      }
    },
    route: {
      data: function (transition) {
        this.setFooterShow(false);
        transition.next();
      },
      deactivate: function (transition) {
        this.setFooterShow(true);
        transition.next();
      }
    }
  }
</script>
