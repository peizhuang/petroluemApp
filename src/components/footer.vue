<style scoped>
  .footer {
    text-align: center;
    display: flex;
    padding: .5rem 0;
    border-top: 1px solid #cccccc;
  }

  .isActive {
    color: #00ACFF;;
  }

  .menuItem {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
  }

  .menu span {
    flex: 1;
    font-size: 1rem;
  }

  .menu span:first-child {
    font-size: 1.4rem;
  }

  #messageList {

  }
</style>
<template>
  <div class="footer">
    <li v-for="menu in menus" id="{{menu.id}}" :class="[menuItem]"
        @click="activeItem($index,menu.id)" v-link="menu.link">
      <span class="{{menu.class}}"></span>
      <span>{{menu.label}}</span>
    </li>
  </div>
</template>
<script>
  import {getCurrentContent} from '../store/action'
  import {list_type} from '../store/getter'
  export default {
    data (){
      return {
        menus: [
          {id: "messageList", class: "fa fa-comment", label: "消息列表", isActive: true, link:{path:'/list',activeClass:'isActive'}},
          {id: "messageFeedback", class: "fa fa-cloud-upload", label: "消息反馈", isActive: false, link:{path: "/feedback",activeClass:'isActive' }},
          {id: "messageHistory", class: "fa fa-history", label: "反馈历史", isActive: false, link:{path: "/history",activeClass:'isActive' }}
        ],
        menuItem: "menuItem"

      }
    },
    vuex: {
      actions: {
        getCurrentContent,
      }
    },
    props: {
      currentContent: {
        type: String
      }
    },
    methods: {
      test: ()=> {
        console.log("this is test function .");
      },
      activeItem: function ($index, id) {
        console.log("sadf");
        for (let i in this.menus) {
          let menu = this.menus[i];
          menu.isActive = false;
        }
        this.menus[$index].isActive = true;
//        this.$dispatch('contentChanged', this.menus[$index].id);
        this.getCurrentContent(id)
      }
    }

  }
</script>
