<!--子组件-->
<template>
  <label>
    <input :value="$store.state.dialog.show"/>
    <input :value="show"/>
    <input :value="$store.getters.not_show"/>
    <input :value="not_show"/>
  </label>
</template>

<script>
import {mapState, mapGetters} from 'vuex';
export default {
  computed: {
    // 这里的三点叫做 : 扩展运算符
    ...mapState({
      show: state => state.dialog.show
    }),
    ...mapGetters({
      not_show: 'not_show'
    })
  }
}
</script>
