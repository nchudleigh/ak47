<template lang="html">

<div class="">
    <span class="text bold mono s">{{endpoint.method}}</span>
    <span class="text mono s m1l">{{endpoint.url}}</span>
    <form v-on:submit.prevent="submit(payload)">
        <div class="">
            <textarea id="textarea" v-model="payload" style="resize:none;height:100px" class="oh text s u-full-width" @keydown="tab" @keyup="resize">
        </div>
        <button @click="submit(payload)">Send</button>
        <span class="text mono grey cp hgrey m1l" @click="cancel">Cancel</span>
    </form>
</div>

</template>

<script>

export default {
    name: 'request',
    props : {
        bus: Object,
        obj: Object,
        submit: Function
    },
    data() {
        return {
            endpoint: {
                url: 'https://glock.run/links/link_8e3n2jdo2djlj',
                method: 'PATCH'
            }
        }
    },
    created(){
        setTimeout(this.resize, 1);
        this.bus.$on('edit', ()=>{setTimeout(this.resize, 1)});
    },
    methods: {
        resize(e) {
                var ta = document.getElementById('textarea');
                if (!ta) return;
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
        cancel() {
            this.bus.$emit('cancel')
        }
    },
    computed:{
        payload() {return this.obj}
    }
}

</script>
