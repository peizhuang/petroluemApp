<template>
  <div class="handle">
    <div v-for="item in chatList">
      <li class="time" v-show="timeShow(item.time,$index,chatList)">{{item.time}}</li>
      <chat :type="item.type" :show-name="item.showName" :name="item.name" :value="item" :click-pop-show="true"
            @on-click-message="onClickMessage">
        {{item.value}}
        <img :src="item.headUrl" alt="" slot="head">
      </chat>
    </div>
    <!-- <alert :show.sync="show" title="恭喜您" button-text="好棒，去ATM转账">
       <p style="text-align:center;">中大奖了！99999元只要转4000元手续费</p>
     </alert>
 -->
  </div>
</template>

<script>
  import {} from '../../store/getter'
  import Alert from 'vux/src/components/alert'
  import Chat from '../components_own/chatList.vue'
  import Popup from '../components_own/popup.vue'

  export default {
    data () {
      return {
        show: false,
        chatList: [{
          type: "self",
          name: "说不清",
          value: "this e",
          showName: true,
          headUrl: "http://img1.imgtn.bdimg.com/it/u=2828453573,3283969866&fm=21&gp=0.jpg",
          time: "2016-09-13 15:58"
        }, {
          type: "other",
          name: "王",
          value: "I w",
          showName: true,
          headUrl: "http://img1.imgtn.bdimg.com/it/u=2828453573,3283969866&fm=21&gp=0.jpg",
          time: "2016-09-13 15:59"
        }]
      }
    },
    vuex: {
      getters: {}
    },
    components: {
      Alert,
      Chat,
      Popup
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
      },
      onClickMessage (value){
        console.log(value);
      },
      addItem (){
        this.chatList.push({
          type: "other",
          name: "大王",
          value: "I wa",
          showName: true,
          headUrl: "http://img1.imgtn.bdimg.com/it/u=2828453573,3283969866&fm=21&gp=0.jpg",
          time: "2016-09-13 17:43"
        });
      },
      timeShow (itemTime, index, lists){
        if (index == 0) {
          return true;
        }
        let lastTime = lists[index - 1].time;
        if (Math.abs(itemTime.substring(11, 13) - lastTime.substring(11, 13)) >= 2) {
          return true;
        } else if (Math.abs(itemTime.substring(8, 10) - lastTime.substring(8, 10)) > 0) {
          return true;
        } else
          return false;
      }
    },
    computed: {}
    /*  events: {
     onClickMessage (){
     console.log("test");
     }
     }*/
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .title {
    display: flex;
  }

  .handle {
    /*background-color: #00ACFF;*/
  }

  .time {
    margin-top: 1em;
    text-align: center;
    color: #b2b2b2;
    font-size: .8em;
  }
</style>
