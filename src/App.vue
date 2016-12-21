<style src="./css/normalize.css"></style>

<style src="./css/index.css"></style>

<template>

<transition name="fade" mode="out-in">
    <router-view></router-view>
</transition>

</template>

<script>
import landing from './pages/landing';
import dashboard from './pages/dashboard';
import state from './js/state';

export default {
    name: 'app',
    components: {
        landing,
        dashboard,
    },
    created() {
        state.init();
        this.$router.push({ name: 'links' });
        // Stripe.setPublishableKey(process.env.STRIPE_KEY)
    },
};
</script>
