/**
 * Created by xpz on 8/31/16.
 */
const state = {
  num: 1,
  listtype: "general"
};

const mutations = {
  setCurrentContent: (state, content)=> {
    state.currentContent = content;
  },
  setListType: (state, type) => {
    state.listtype = type;
  }
};

export  default {
  state,
  mutations
};

