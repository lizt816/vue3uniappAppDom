import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import $d from "utlis/index.js"
import mescrollBody from "@/components/mescroll-uni/components/mescroll-body/mescroll-body.vue"
import zPaging from "@/components/z-paging/components/z-paging/z-paging.vue"
Vue.component('mescrollBody',mescrollBody)
Vue.component('z-paging',zPaging)
Vue.prototype.$d = $d
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif