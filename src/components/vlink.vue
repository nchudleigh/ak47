<template lang="html">
    <tr>
        <td>
            <div class="text mono s ib" @click="click('path')">
                <div v-if="!active" class="hbggrey br cp" style="max-width:155.4px;width:155.4px;height:40px;line-height:40px;padding-left:9.6px">
                    {{link.path}}
                </div>
                <input id="input_path" v-if="active" type="text" v-model="link.path" placeholder="e.g. /search/:query">
            </div>
        </td>
        <td>
            <div class="text mono s ib" @click="click('dest')">
                <div v-if="!active" class="hbggrey p5 br cp oh" :style="maxwidth">
                    {{link.dest}}
                </div>
                <input id="input_dest"  v-if="active" type="text" v-model="link.dest" placeholder="e.g. https://google.com?q=:query">
            </div>
        </td>
        <td>
            <a v-if="user && !active_global" class="text s blue cp ul" :href="fullpath" target="_blank" >
                Go <i class="fa fa-external-link-square"></i>
            </a>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'vlink',
    props: {
        action: {
            type: String,
            default: 'update',
        },
        link: Object,
        bus: Object,
        user: Object,
    },
    data() {
        return {
            // whether this instance is being used right now
            active: false,
            // whether an instance of vlink is being used right now
            active_global: false,
        };
    },
    methods: {
        validate() {
            let error = '';
            error = this.link.path.startsWith('/') ? error : 'Path must start with a /';
            error = this.link.path.indexOf(' ') === -1 ? error : 'No spaces allowed in path';

            error = this.link.dest.startsWith('http') ? error : 'Must start with http';
            error = this.link.dest.indexOf(' ') === -1 ? error : 'No spaces allowed';

            this.bus.$emit('error', error);
        },
        click(field) {
            if (this.action === 'create') this.bus.$emit('create', this.link);
            else if (this.action === 'update') this.bus.$emit('update', this.link);
            setTimeout(() => {
                document.getElementById(`input_${field}`).focus();
            }, 10);
        },
        onactive(link) {
            this.active_global = true;
            this.active = link.id === this.link.id;
        },
        cancel() {
            this.active_global = false;
            this.active = false;
        },
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
    watch: {
        link: {
            handler() {
                this.validate();
            },
            deep: true,
        },
    },
    computed: {
        fullpath() {
            return `https://${this.user.key}.glock.link${this.link.path}`;
        },
    },
};
</script>

<style lang="css">
</style>
