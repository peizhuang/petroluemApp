/**
 * Created by xpz on 8/30/16.
 */

/************************************ app action ******************************************/
export const getCurrentContent = ({dispatch, state}, content) => {
  dispatch("setCurrentContent", content);
};
export const setFooterShow = ({dispatch}, flag) => {
  dispatch("setFooterShow", flag);
}


/************************************ list action ******************************************/
export const setListType = ({dispatch, state}, type) => {
  dispatch("setListType", type);
}

/************************************ feedback action **************************************/


/************************************ history action ***************************************/



/************************************ setting action ***************************************/
