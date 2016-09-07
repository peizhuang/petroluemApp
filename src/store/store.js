/**
 * Created by xpz on 8/30/16.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import Feedback from './module/feedback'
import History from './module/history'
import List from './module/list'

Vue.use(Vuex);

export  default  new Vuex.Store({
  state: {
    currentContent: "messageList",
    isFooterShow: true
  },
  mutations: {
    setCurrentContent: (state, content)=> {
      state.currentContent = content;
    },
    setFooterShow: (state, flag) => {
      state.isFooterShow = flag;
    }
  },
  modules: {
    Feedback,
    History,
    List
  }

});

