/**
 * Created by xpz on 9/5/16.
 */
export default function (router) {
  router.map({
    "/list": {
      name: 'list',
      component: require('./components/list/messageList.vue'),
      subRoutes: {
        "/general": {
          name: "general",
          component: require('./components/list/list_general.vue')
        },
        "/handle": {
          name: "handle",
          component: require('./components/list/list_handle.vue')
        }
      }
    },
    "/feedback": {
      component: require('./components/feedback/messageFeedback')
    },
    "/history": {
      component: require('./components/history/messageHistory')
    },
    "/setting": {
      component: require('./components/setting/setting.vue')
    }
  });

  router.redirect({

    // 重定向 /a 到 /b
    '/': '/list'

    /* // 重定向可以包含动态片段
     // 而且重定向片段必须匹配
     '/user/:userId': '/profile/:userId',

     // 重定向任意未匹配路径到 /home
     '*': '/home'*/
  })

}
