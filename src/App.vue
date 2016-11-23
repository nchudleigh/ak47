<template>
<transition name="fade" mode="out-in">
    <router-view></router-view>
</transition>
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
  }
}
</script>


<style src="./css/normalize.css"></style>
<style src="./css/index.css"></style>
