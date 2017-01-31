<template lang="html">

<div class="">
    <span class="text bold mono s">{{method}}</span>
    <span class="text mono s m1l">{{endpoint}}</span>
    <div class="">
        <textarea id="textarea" v-model="payload" style="resize:none;height:100px" class="oh text s u-full-width" @keydown.tab.prevent="tab" @keyup="resize">
    </div>
    <button @click="send">Send</button>
    <span class="text mono grey cp hgrey m1l" @click="cancel">Cancel</span>
    <div class="text mono m1t">{{error_message}}</div>
</div>

</template>

<script>

import api from '../js/api';

export default {
    name: 'request',
    props: {
        bus: Object,
        obj: Object,
        fields: Array,
        method: String,
        url: String,
        submit: Function,
        select: String,
    },
    data() {
        return {
            error_message: '',
            payload: {},
        };
    },
    created() {
        setTimeout(this.resize, 1);
        this.payload = this.obj;
        this.bus.$on('error', (error) => { this.error_message = error; });
    },
    methods: {
        resize() {
            const ta = document.getElementById('textarea');
            if (!ta) return;
            ta.style.height = 'auto';
            ta.style.height = `${ta.scrollHeight}px`;
        },
        tab() {
            const ta = document.getElementById('textarea');
            const start = ta.selectionStart;
            const end = ta.selectionEnd;
            // set textarea value to: text before caret + tab + text after caret
            ta.value = `${ta.value.substring(0, start)}\t${ta.value.substring(end)}`;
            // put caret at right position again
            ta.selectionStart = ta.selectionEnd = start + 1;
        },
        send() {
            this.submit(this.payload)
                .then(
                    (resp) => { this.error_message = resp.message; },
                    (resp) => { this.error_message = resp.message; },
                )
                .catch((resp) => { this.error_message = resp.message; });
        },
        cancel() {
            this.bus.$emit('cancel');
        },
    },
    watch: {
        payload: {
            handler() {
                this.bus.$emit('change', this.payload);
            },
            deep: true,
        },
        obj: {
            handler() {
                this.payload = this.obj;
            },
            deep: true,
        },
    },
    computed: {
        endpoint() {
            const id = this.obj.id ? this.obj.id : '';
            return `${api.domain}${this.url}${id}`;
        },
    },
};

</script>
