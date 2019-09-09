import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import router from './router'
import store from './store'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {messages} from './i18n'

Vue.config.productionTip = false


Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh_TW',
  messages,
})

Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value)
})


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
