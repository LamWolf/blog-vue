import Vue from 'vue'
import App from './App.vue'
import store from './store';
import "./assets/css/index.css";
import "./assets/css/iconfont.css";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
