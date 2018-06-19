import Vue from 'vue'
import vuex from 'vuex'
import dialog from './modules/dialog'
import login from './modules/login'

Vue.use(vuex);

export default new vuex.Store({
  modules: {
    dialog,
    login
  }
})
