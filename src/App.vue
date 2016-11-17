<template>
    <router-view>
    </router-view>
</template>

<script>

import landing from './pages/landing'
import dashboard from './pages/dashboard'
import User from './js/user'

export default {
  name: 'app',
  components: {
      landing,
      dashboard
  },
}
</script>

<style src="./css/normalize.css"></style>
<!-- <style src="./css/animate.css"></style> -->
<style src="./css/index.css"></style>
