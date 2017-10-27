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
import links from './links';

export default {
    name: 'app',
    components: {
        landing,
        dashboard,
    },
    created() {
        links.get().then((r) => {
            r.data.forEach((l) => {
                this.$store.commit('add_link', l);
            });
        });
        this.$router.push({ name: 'links' });
        // Stripe.setPublishableKey(process.env.STRIPE_KEY)
    },
};
</script>
