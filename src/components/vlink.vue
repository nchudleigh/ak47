<template lang="html">
    <tr>
        <td>
            <div class="text mono s ib" @click="edit('path')" >
                <div v-if="!editing" class="hbggrey p5 br cp" :style="maxwidth">
                    {{link.path}}
                </div>
                <input id="input_path" v-if="editing" type="text" v-model="link.path">
            </div>
        </td>
        <td>
            <div class="text mono s ib" @click="edit('dest')" >
                <div v-if="!editing" class="hbggrey p5 br cp oh" :style="maxwidth">
                    {{link.dest}}
                </div>
                <input id="input_dest"  v-if="editing" type="text" v-model="link.dest">
            </div>
        </td>
    </tr>
</template>

<script>

export default {
    name:'vlink',
    props: {
        link: Object,
        bus: Object
    },
    data() {
        return {
            editing: false,
            editing_global: true,
        }
    },
    methods: {
        edit(field) {
            this.bus.$emit('edit', this.link);
            setTimeout(() => {
                document.getElementById(`input_${field}`).focus();
            }, 10);
        },
        onedit(link) {
            console.log('onedit', this.editing_global);
            this.editing_global = true;
            this.editing = (link.id == this.link.id);
        },
        cancel(id) {
            this.editing_global = true;
            this.editing=false;
        }
    },
    created() {
        this.bus.$on('edit', this.onedit)
        this.bus.$on('cancel', this.cancel)
    },
    destroyed() {
        this.bus.$off('edit', this.onedit)
        this.bus.$off('cancel', this.cancel)
    },
    computed: {
        maxwidth() {
            return {
                'max-width': this.editing_global?'165px':'1000px'
            }
        }
    }

}
</script>

<style lang="css">
</style>
