<template>
    <landing></landing>
</template>

<script>

import Landing from './components/Landing'
import utils from './components/utils/utils'

export default {
  name: 'app',
  components: {
      Landing,
      utils
  },
}
</script>

<style src="./css/normalize.css"></style>
<style src="./css/index.css"></style>
