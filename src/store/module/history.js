/**
 * Created by xpz on 8/31/16.
 */
const state = {
  num: 3
};

const mutations = {
  getCurrentContent: (state, content)=> {
    state.currentContent = content;
  }
};

export  default  {
  state,
  mutations
};

