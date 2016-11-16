<template>

<!-- Landing Page -->
<div class="container">
    <div class="m1h">
        <div class="text mono">
            What does it do?
        </div>
        <div class="text sans bold">
            Glock redirects, rewrites and tracks link clicks
        </div>
    </div>
    <div class="m1h">
        <div class="text mono">
            What can I do with it?
        </div>
        <div class="text sans bold">
            A lot! Here are some common uses:
        </div>
        <div class="text sans s m1l">
            <a href="#">
                Link Shortening
            </a>
        </div>
        <div class="text sans s m1l">
            <a href="#">
                Use a custom domain and track your Affiliate Links
            </a>
        </div>
        <div class="text sans s m1l">
            <a href="#" class="text sans">
                Easily version Static Files on a CDN
            </a>
        </div>
    </div>

    <div class="m1h">
        <div class="text mono">
            How do I use it?
        </div>
        <div class="text sans bold">
            This web application, or the API
        </div>
    </div>

    <div class="m1h">
        <div class="text mono">
            How much does it cost?
        </div>
        <div class="text sans bold">
            $20 USD/month for absolutely unlimited usage
        </div>
    </div>

    <div class="m1h">
        <div class="text mono">
            How do I get started?
        </div>
        <div class="text sans bold">
            Put in your email and slap that Ok button
        </div>
    </div>

    <div id="email_input" class="m1h">
        <input type="text" placeholder="your@email.com" v-model="email_addr" v-bind:class="{red:error_message}">
        <button v-on:click="validate">Ok</button>
        <div class="text mono">
            {{error_message}}
        </div>
    </div>
    <!--
    <div>
        <div class="text mono">
            Your API key
        </div>
        <div class="text bold">
            Put this
            <a href="#">somewhere safe</a>
            <div class="">
                <copybox :content="user.live_key"></copybox>
            </div>
        </div>
    </div> -->

</div>

</template>

<script>
import User from '../js/user'

console.log(User)

export default {
    name: 'landing',
    data() {
        return {
            email_addr: "",
            error_message: ""
        }
    },
    methods: {
        validate: function() {
            if (this.email_addr.includes("@") && this.email_addr.includes(".")) {
                User.create(this.email_addr);
                this.error_message = "";
            } else {
                this.error_message = "Invalid email address";
            }
        },
    }
}

</script>
