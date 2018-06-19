import http from '@/axios/index'

const login = {
  state: {
    result: {resMsg: '未登录'}
  },
  mutations: {
    switch_login(state) { // 这里的state对应着上面这个state
      http.post(
        'bc/login',
        {
          username: "admin",
          password: "123456"
        }).then(res => {
        console.log(res);
        state.result = res;
      });
      // 你还可以在这里执行其他的操作改变state
    }
  },
  actions: {
    switch_login(context) { // 这里的context和我们使用的$store拥有相同的对象和方法
      context.commit('switch_login');
      // 你还可以在这里触发其他的mutations方法
    }
  },
  getters: {
    test_login(state) { // 这里的state对应着上面这个state
      return "结果为=>" + state.result;
    }
  }
};

export default login
