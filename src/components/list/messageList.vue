<template>
  <div class="list">
    <x-header :left-options="{backText:'返回',showBack:false,preventGoBack:true}" style="background-color:deepskyblue;">
      <a slot="left"><i class="fa fa-search"></i></a>
      <a slot="right" v-link="{path:'/setting'}"><i class="fa fa-gear"></i></a>
      <li class="xHeaderTitle">
        <span v-link='{path:"/list/general" ,activeClass:"active"}' @click='setListType("general")'>通知消息</span><span
        v-link='{path:"/list/handle",activeClass:"active"}' @click='setListType("handle")'>处理意见</span>
      </li>
    </x-header>
    <!--  <div class="title">
        <li></li>
        <li>
          <span v-link='{path:"/list/foo"}' >通知消息</span>
          <span>处理意见</span>
        </li>
        <li></li>
      </div>-->
    <router-view></router-view>
    <!--<div class="content">
      <button @click="login">login</button>
      <button @click="req">click</button>
      <alert :show.sync="show" title="恭喜您" button-text="好棒，去ATM转账">
        <p style="text-align:center;">中大奖了！99999元只要转4000元手续费</p>
      </alert>
    </div>-->
  </div>
</template>

<script>
  import {list_test, currentContent, list_type} from '../../store/getter'
  import {setListType} from '../../store/action'
  import Alert from 'vux/src/components/alert'
  import XHeader from 'vux/src/components/x-header'
  require('../../assets/css/common.css')


  export default {
    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        show: false
      }
    },
    vuex: {
      getters: {
        num: list_test,
        currentContent,
        listType: list_type
      },
      actions: {
        setListType
      }
    },
    components: {
      Alert,
      XHeader
    },
    methods: {
      login (){
        this.$http.post("http://192.168.1.189:8000/login", {username: 'admin', password: '123'}).then((data)=> {
          console.log(JSON.stringify(data));
        }, (error)=> {
          console.log(JSON.stringify(error));
        });
      },
      req (){
        this.$http.post("http://192.168.1.189:8000/project/projectman/getreportbyid", {id: "123465"}).then((data)=> {
          console.log(JSON.stringify(data));
        }, (error)=> {
          console.log(JSON.stringify(error));
        });
      }
    },

    route: {
      activate: function (transition) {
        if (this.listType == "general" && this.$route.name != "general") {
          this.$router.go("/list/general");
        }
        else if (this.listType == "handle" && this.$route.name != "handle") {
          this.$router.go("/list/handle");
        } else {
          this.$router.go("/list/general");
        }
        transition.next();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .list {
    background-color: #eeeeee;
  }

  .title {
    display: flex;
  }
</style>
