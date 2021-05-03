import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8000/'

store.dispatch('auth/me').then(() => {
    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app')
})
