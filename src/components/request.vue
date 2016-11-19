<style lang="css">
</style>

<template lang="html">

<div class="">
    <span class="text bold mono s">{{endpoint.method}}</span>
    <span class="text mono s m1l">{{endpoint.url}}</span>
    <form v-on:submit.prevent="submit">
        <div class="">
            <textarea id="textarea" v-model="body" style="resize:none;height:100px" class="oh text s u-full-width" v-on:keydown="tab" v-on:keyup="resize">
            </div>
            <button v-on:click="submit">Send</button>
            <span class="text mono grey cp hgrey" v-on:click="cancel">Cancel</span>
        </div>
    </form>

</template>

<script>

export default {
    name: 'request',
    // props :['endpoint', 'body', 'submit'],
    data() {
        return {
            endpoint: {
                url: 'https://glock.run/links/link_8e3n2jdo2djlj',
                method: 'PATCH'
            },
        }
    },
    methods: {
        resize(e) {
                console.log('resize')
                var ta = document.getElementById('textarea');
                ta.style.height = 'auto';
                ta.style.height = ta.scrollHeight + 'px';
        },
        tab(e) {
            var keyCode = e.keyCode || e.which;
            if (keyCode == 9) {
                e.preventDefault();
                var ta = document.getElementById('textarea');
                var start = ta.selectionStart;
                var end = ta.selectionEnd;
                // set textarea value to: text before caret + tab + text after caret
                ta.value = ta.value.substring(0, start) + "\t" + ta.value.substring(end);
                // put caret at right position again
                ta.selectionStart = ta.selectionEnd = start + 1;
            }
        },
        submit() {
            console.log('submit');
        },
        cancel() {
            console.log('cancel');
        }
    },
    computed: {
        body() {
            return "{\n\t'path': '/:search',\n\t'dest': 'google.com/:search'\n}"
        }
    }
}

</script>
