<template>
  <div id="demo01">
    <a href="javascript:" @click="$store.dispatch('switch_dialog')">点击{{$store.state.dialog.show}}</a>
    <t-dialog></t-dialog>
    <div style="height: 30px"></div>
    <div>
      <p>{{result.resMsg}}</p>
      <button @click="login">{{btn_val}}</button>
      <router-link to="/test1" tag="button"  @click.native="$store.dispatch('switch_login')">登录路由</router-link>
      <router-link to="/test2" tag="button">主页</router-link>
      <router-link to="/test3" tag="button">测试</router-link>
    </div>
    <router-view/>
  </div>
</template>


<script>
import http from '@/axios/index'
import dialog from '../demo2/dialog.vue'

export default {
  name: 'INDEX',
  components: {
    "t-dialog": dialog
  },
  data() {
    return {
      // 首先定义数据
      a: '',
      result: {}
    }
  },
  created: function () {
    this.a = '登录';
    // console.log(this)
    // this.dataList = this.sortArray(this.dataList, 'score')
  },
  computed: {
    btn_val: function() {
      return this.a;
    }
  },
  methods: {
    login() {
      http.post(
        'bc/login',
        {
          username: "admin",
          password: "123456"
        }).then(res => {
        this.result = res;
        console.log(res.result);
      });
    },
    next: function () {

    }
  },
  mounted() {

  }
}
</script>
<style>

</style>
