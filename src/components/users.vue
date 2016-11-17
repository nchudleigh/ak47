<template lang="html">
  <div class="">
      this is the user page
      {{user}}
  </div>
</template>

<script>
import state from '../js/state'

export default {
    name: 'users',
    data() {
        return {
            user: state.user
        }
    }
}
</script>

<style lang="css">
</style>
