<template>
<router-view>
</router-view>
</template>

<script>
import landing from './pages/landing'
import dashboard from './pages/dashboard'
import User from './js/user'
import state from './js/state'

export default {
  name: 'app',
  components: {
    landing,
    dashboard
  },
  created() {
    console.log('hi i am paul')
    if (state.user.id) {
      console.log('dashboard');
      this.$router.push({
        name: 'dashboard'
      })
    } else {
      console.log('landing');
      this.$router.push({
        name: 'landing'
      })
    }
  }
}
</script>



<style src="./css/normalize.css"></style>
<!--

<style src="./css/animate.css"></style> -->


<style src="./css/index.css"></style>
