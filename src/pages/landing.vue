<template>

<!-- Landing Page -->
<div class="container">
    <div class="m2h">
        <span class="text mono l bgyellow" style="padding:.4rem">
            glock.link
        </span>
    </div>
    <div class="m2h">
        <div class="text mono grey">
            What does it do?
        </div>
        <div class="text mono bold">
            Redirects and tracks link clicks.
            <div>
                <a href="http://kd93ksl921.glock.link/search/puppers">kd93ksl921.glock.link/search/puppers</a>
                ->
                <a href="https://google.com/search?q=puppers">google.com/search?q=puppers</a>
            </div>
        </div>
    </div>
    <!-- <div class="m2h">
        <div class="text mono grey">
            What can I do with it?
        </div>
        <div class="text mono bold">
            A lot! Here are some common uses:
        </div>
        <div class="text mono bold m1l">
            <a href="#link-shortening">
                link shortening
            </a>
        </div>
        <div class="text mono bold m1l">
            <a href="#custom-domain">
                affiliate links
            </a>
        </div>
        <div class="text mono bold m1l">
            <a href="#static-files">
                web apps
            </a>
        </div>
    </div> -->

    <div class="m2h">
        <div class="text mono grey">
            How do I use it?
        </div>
        <div class="text mono bold">
            This web application, or the API
        </div>
    </div>

    <div class="m2h">
        <div class="text mono grey">
            How much does it cost?
        </div>
        <div class="text mono bold">
            Not sure yet, for now just use it.
        </div>
    </div>

    <div class="m2h">
        <div class="text mono">
            How do I get started?
        </div>
        <div class="text mono bold">
            Just put in your email!
        </div>
    </div>

    <div id="email_input" class="m1h">
        <div v-if="!show_login" class="">
            <input type="text" placeholder="your@email.com" v-model="email_addr" v-bind:class="{red:error_message}" v-on:keyup.enter="submit">
            <button @click="create">Ok</button>
            <div class="">
                <a class="text s1 mono cp blue ns" @click="show_login=true">
                    I already have an account
                </a>
            </div>
        </div>
        <div v-if="show_login">
            <input type="text" placeholder="XXXXXXXXXXXXXX" v-model="key">
            <input type="text" placeholder="live_XXXXXXXXX" v-model="live_key">
            <button @click="login">Ok</button>
            <div class="">
                <a class="text s1 mono cp blue ns" @click="show_login=false">
                    I need to create an account
                </a>
            </div>
        </div>
        <div class="text mono">
            {{error_message}}
        </div>
    </div>
</div>

</template>

<script>
import user from '../js/user';

export default {
    name: 'landing',
    data() {
        return {
            show_login: false,
            email_addr: '',
            live_key: '',
            error_message: '',
        };
    },
    methods: {
        login() {
            user.get(this.key, this.live_key)
                .then(() => {
                    this.$router.push({ name: 'links' });
                });
        },
        create() {
            if (this.email_addr.includes('@') && this.email_addr.includes('.')) {
                this.error_message = '';
            } else {
                this.error_message = 'Invalid email address';
                return;
            }
            user
                .create(this.email_addr)
                .then(() => {
                    this.$router.push({ name: 'links' });
                })
                .catch((err) => {
                    this.error_message = `Request failed ${err.message}`;
                });
        },
    },
};
</script>
