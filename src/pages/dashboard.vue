<template lang="html">
    <div class="container">
        <div class="topbar m1t">
            <span class="text mono">
                <router-link class="tab m1r" to="/links">LINKS</router-link>
                <router-link class="tab m1r" to="/user">USER</router-link>
            </span>
        </div>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'dashboard'
}
</script>

<style lang="css" scoped>
    .tab {
        color: #B4B4B4;
    }
    .tab.router-link-active {
        color: #2C2C2C;
    }
</style>
