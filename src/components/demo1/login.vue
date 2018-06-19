<template>
  <div>
    <p>{{$store.state.login.result}}</p>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'Login',
  methods: {
    ...mapActions({
      switch_login: 'switch_login'
    })
  }
}

</script>
