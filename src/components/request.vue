<template lang="html">

<div class="">
    <span class="text bold mono s">{{endpoint.method}}</span>
    <span class="text mono s m1l">{{endpoint.url}}</span>
    <form v-on:submit.prevent="submit">
        <div class="">
            <textarea id="textarea" v-model="body" style="resize:none;height:100px" class="oh text s u-full-width" @keydown="tab" @keyup="resize">
        </div>
        <button @click="submit">Send</button>
        <span class="text mono grey cp hgrey m1l" @click="cancel">Cancel</span>
    </form>
</div>

</template>

<script>

export default {
    name: 'request',
    props : {
        bus: Object,
        input: Object
    },
    data() {
        return {
            endpoint: {
                url: 'https://glock.run/links/link_8e3n2jdo2djlj',
                method: 'PATCH'
            }
        }
    },
    methods: {
        resize(e) {
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
            this.bus.$emit('submit')
        },
        cancel() {
            this.bus.$emit('cancel')
        }
    },
    computed: {
        body() {
            var content = "{"
            for ( var key in input ) {
                content += `\n\t"${key}": "${input[key]}",`
            }
            return content+"\n}"
        }
    }
}

</script>
