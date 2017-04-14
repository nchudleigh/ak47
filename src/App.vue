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
import links from './js/links';

export default {
    name: 'app',
    components: {
        landing,
        dashboard,
    },
    created() {
        state.init();
        links.get().then((results) => {
            state.update('links', results);
        });
        this.$router.push({ name: 'links' });
        console.log('refresh');
        // Stripe.setPublishableKey(process.env.STRIPE_KEY)
    },
};
</script>
