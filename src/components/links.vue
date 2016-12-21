<style lang="css">

code {
    font-weight: normal;
}

</style>

<template lang="html">

<div class="m1h">
    <div class="p1 bo grey">
        <div class="text mono grey">
            What are links?
        </div>
        <div class="text sans s bold">
            Links define a path and a destination: <code>yoursite.com/search</code> -> <code>google.com</code>
        </div>
        <div class="text sans s bold">
            You can replace variables with them too: <code>yoursite.com/:search</code> -> <code>google.com?q=:search</code>
        </div>
        <div class="text sans s bold">
            Or even use wildcards: <code>yoursite.com/assets/*</code> -> <code>your.cdn.com/version/*</code>
        </div>
    </div>
    <div class="row m2t">
        <!-- Table Container -->
        <div class="columns p1b" :class="table_class">
            <table class="u-full-width oh">
                <!-- Headers -->
                <thead>
                    <tr>
                        <th class="text mono s bold">
                            Path
                        </th>
                        <th class="text mono s bold">
                            Destination
                        </th>
                    </tr>
                </thead>

                <!-- List -->
                <tbody>
                    <vlink :link="placeholder" :bus="bus" :action="'create'"/>
                    <vlink :link="link" :bus="bus" v-for="(link, index) in links"/>
                </tbody>
            </table>
        </div>
        <!-- Edit Container -->
        <div v-if="updating" class="columns" :class="active_class">
            <request :obj="updating" :bus="bus" :submit="update" :method="'PATCH'" :url="'/links/'"></request>
        </div>
        <div v-if="creating" class="columns" :class="active_class">
            <request :obj="creating" :bus="bus" :submit="create" :method="'POST'" :url="'/links/'"></request>
        </div>
    </div>
</div>

</template>

<script>

import Vue from 'vue';
import state from '../js/state';
import links from '../js/links';
import request from './request';
import vlink from './vlink';

export default {
    name: 'links',
    components: {
        request,
        vlink,
    },
    data() {
        return {
            bus: new Vue(),
            active: false,
            creating: null,
            updating: null,
            user: state.get('user'),
            links: state.get('links'),
            create: links.create,
            update: links.update,
            placeholder: { path: '/[your path here]', dest: 'https://[your destination here]' },
        };
    },
    created() {
        this.bus.$on('create', this.oncreate);
        this.bus.$on('update', this.onupdate);
        this.bus.$on('cancel', this.cancel);
    },
    methods: {
        oncreate(link) {
            this.creating = link;
            this.updating = null;
            this.active = true;
        },
        onupdate(link) {
            this.active = true;
            this.updating = this.links.find(l => link.id === l.id);
            this.creating = null;
        },
        cancel() {
            this.creating = null;
            this.updating = null;
            this.active = false;
            this.placeholder = { path: '/[your path here]', dest: 'https://[your destination here]' };
        },
    },
    computed: {
        table_class() {
            return {
                six: this.active,
                bor: this.active,
                twelve: !this.active,
            };
        },
        active_class() {
            return {
                six: this.active,
                zero: !this.active,
            };
        },
    },
};
</script>
