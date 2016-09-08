<template>
  <div class="list">
    <div class="content">
      <button @click="login">login</button>
      <button @click="req">click</button>
      <alert :show.sync="show" title="恭喜您" button-text="好棒，去ATM转账">
        <p style="text-align:center;">中大奖了！99999元只要转4000元手续费</p>
      </alert>
    </div>
  </div>
</template>

<script>
  import { currentContent} from '../../store/getter'
  import Alert from 'vux/src/components/alert'


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
        currentContent
      }
    },
    components: {
      Alert
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .title {
    display: flex;
  }
</style>
