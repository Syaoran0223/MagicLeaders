// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store.js'

// 饿了么UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 点击查看图片
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 点击返回顶部 Blu UI
import VueBlu from 'vue-blu'
import 'vue-blu/dist/css/vue-blu.min.css'
Vue.use(VueBlu)

// 点击切换标题
// Vue.use(VueRouterTitle,options)
Vue.use(require('vue-wechat-title'));

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
