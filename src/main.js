import Vue from 'vue'
import iView from 'iview'


import Avue from '@smallwei/avue'



/*
    解决中文

 */
// ! element-plus vue3.0
// import element from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'
// import 'dayjs/locale/zh-cn' //中文
//
// createApp(App).use(router).use(element, { locale }).mount('#app')




/*
   在项目中引入 ivew 框架

   步骤！
       1 npm install iview --save

       2 在main 中添加代码

 */
Vue.use(iView);
Vue.use(Avue);


import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

// import './plugins/avue'
import '@smallwei/avue/lib/index.css'

import App from './App'
import store from './store'
import router from './router'


import '@/icons' // icon
import '@/permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
