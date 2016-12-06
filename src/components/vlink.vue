<template lang="html">
    <tr>
        <td>
            <div class="text mono s ib" @click="click('path')">
                <div v-if="!active" class="hbggrey p5 br cp" :style="maxwidth">
                    {{link.path}}
                </div>
                <input id="input_path" v-if="active" type="text" v-model="link.path">
            </div>
        </td>
        <td>
            <div class="text mono s ib" @click="click('dest')">
                <div v-if="!active" class="hbggrey p5 br cp oh" :style="maxwidth">
                    {{link.dest}}
                </div>
                <input id="input_dest"  v-if="active" type="text" v-model="link.dest">
            </div>
        </td>
    </tr>
</template>

<script>

export default {
    name:'vlink',
    props: {
        action: {
            type: String,
            default: 'update'
        },
        link: Object,
        bus: Object
    },
    data() {
        return {
            // whether this instance is being used right now
            active: false,
            // whether an instance of vlink is being used right now
            active_global: false,
        }
    },
    methods: {
        click(field) {
            if(this.action=='create') this.bus.$emit('create', this.link);
            else if (this.action=='update') this.bus.$emit('update', this.link);
            setTimeout(() => {
                document.getElementById(`input_${field}`).focus();
            }, 10);
        },
        onactive(link) {
            this.active_global = true;
            this.active = (link.id == this.link.id);
        },
        cancel(id) {
            this.active_global = false;
            this.active=false;
        }
    },
    created() {
        this.bus.$on('update', this.onactive);
        this.bus.$on('create', this.onactive);
        this.bus.$on('cancel', this.cancel);
    },
    destroyed() {
        this.bus.$off('update', this.onactive);
        this.bus.$off('create', this.onactive);
        this.bus.$off('cancel', this.cancel);
    },
    computed: {
        maxwidth() {
            return {
                'max-width': this.active_global?'165px':'1000px'
            }
        }
    }

}
</script>

<style lang="css">
</style>
