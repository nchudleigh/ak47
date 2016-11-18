<template lang="html">
  <div class="m1h">
      <div class="p1 border grey m1h">
          <div class="text mono grey">
              You must purchase to create links- I mean its not like servers are free.
          </div>
          <div class="text sans s bold">
            Payments are processed by Stripe, you can cancel anytime.
          </div>
          <!-- Credit Card Input -->
          <div class="m1t">
              <input type="text" placeholder="XXXX XXXX XXXX XXXX">
              <input type="text" placeholder="XX/XX">
              <input type="text" placeholder="XXX">
              <input type="button" value="Ok" placeholder="666">
              {{error_message}}
          </div>
      </div>
      <!-- API Keys -->
      <div class="m1h">
          <div class="row" v-for="(value, key) in user">
            <div class="six columns">
                <span class="lightgrey">
                    {{key}}:
                </span>
                <span class="">
                    {{value}}
                </span>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import state from '../js/state'

export default {
    name: 'users',
    data() {
        return {
            user: {
                id: "user_d23j89ej32dsa",
                email: "neil@growsumo.com",
                key:"yd3782hduo321",
                live_key: "live_8wejkdasljds89ouad",
                active: true,
                tier: 'freeloader'
            }
        }
    }
}
</script>

<style lang="css">
</style>
