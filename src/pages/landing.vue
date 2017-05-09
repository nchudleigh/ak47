<template>

<!-- Landing Page -->
<div class="container">
    <div class="m2h">
        <div class="text serif l" title="glock.link">
            Gl
        </div>
        <div class="text lightgrey mono s">
            glock.link
        </div>
    </div>
    <div class="m2h">
        <div class="text mono grey">
            What does it do?
        </div>
        <div class="text sans bold">
            Redirects, rewrites and tracks link clicks
        </div>
    </div>
    <div class="m2h">
        <div class="text mono grey">
            What can I do with it?
        </div>
        <div class="text sans bold">
            A lot! Here are some common uses:
        </div>
        <div class="text sans bold m1l">
            <a href="#link-shortening">
                Link Shortening
            </a>
        </div>
        <div class="text sans bold m1l">
            <a href="#custom-domain">
                Own and Track your Affiliate Links
            </a>
        </div>
        <div class="text sans bold m1l">
            <a href="#static-files" class="text sans">
                Versioning and Rollback for Static Files
            </a>
        </div>
    </div>

    <div class="m2h">
        <div class="text mono grey">
            How do I use it?
        </div>
        <div class="text sans bold">
            This web application, or the API
        </div>
    </div>

    <div class="m2h">
        <div class="text mono grey">
            How much does it cost?
        </div>
        <div class="text sans bold">
            $20 USD/month for absolutely unlimited usage
        </div>
    </div>

    <div class="m2h">
        <div class="text mono">
            How do I get started?
        </div>
        <div class="text sans bold">
            Just put in your email!
        </div>
    </div>

    <div id="email_input" class="m1h">
        <div v-if="!show_login" class="">
            <input type="text" placeholder="your@email.com" v-model="email_addr" v-bind:class="{red:error_message}">
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
