<style lang="css">

code {
    font-weight: normal;
}

</style>

<template lang="html">
<div class="m1h">
    <div class="p1 bo grey" v-if="!onboard.read">
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
        <button class="text s cp" @click="complete('read')">Got it</button>
    </div>
    <div class="p1 bo grey" v-if="onboard.read && !onboard.created">
        <div class="text mono grey">
            Your first link
        </div>
        <div class="text sans s m1t bold">
            Try changing something about the link below
        </div>
        <button class="text s cp" @click="complete('created')">Okay</button>
    </div>
    <div class="row m2t">
        <!-- Table Container -->
        <div class="columns p1b oh" :class="table_class">
            <table class="u-full-width">
                <!-- Headers -->
                <thead>
                    <tr>
                        <th class="text mono s bold">
                            Path
                        </th>
                        <th class="text mono s bold">
                            Destination
                        </th>
                        <th class="text mono s bold">
                        </th>
                    </tr>
                </thead>

                <!-- List -->
                <tbody>
                    <vlink :link="placeholder"
                        :bus="bus"
                        :action="'create'"
                    />
                    <vlink v-for="(link, key, index) in links" :key="key"
                        :link="link"
                        :bus="bus"
                        :user="user"
                    />
                </tbody>
            </table>
        </div>
        <!-- Edit Container -->
        <div v-if="updating" class="columns" :class="active_class">
            <request :obj="updating" :bus="bus" :submit="update" :method="'PATCH'" :url="'/links/'" :fields="['path', 'dest']"></request>
        </div>
        <div v-if="creating" class="columns" :class="active_class">
            <request :obj="creating" :bus="bus" :submit="create" :method="'POST'" :url="'/links/'"  :fields="['path', 'dest']"></request>
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
            // event bus
            bus: new Vue(),
            // true if creating or editing
            active: false,
            // object being created
            creating: null,
            // object being updated
            updating: null,
            // the current user
            user: state.user,
            // the current onboarding state
            onboard: state.onboard.links,
            // the current list of links
            links: state.links,
            // the api call for create
            create: links.create,
            // the api call for update
            update: links.update,
            // placeholder link obj for create
            placeholder: { path: '/search/:query', dest: 'https://google.com?q=:query' },
        };
    },
    created() {
        this.bus.$on('create', this.oncreate);
        this.bus.$on('update', this.onupdate);
        this.bus.$on('change', this.onchange);
        this.bus.$on('cancel', this.oncancel);
    },
    methods: {
        complete(key) {
            state.onboard.links[key] = true;
            state.set('onboard', state.onboard);
        },
        oncreate(link) {
            this.creating = link;
            this.updating = null;
            this.active = true;
        },
        onupdate(link) {
            this.active = true;
            this.updating = this.links[link.id];
            this.creating = null;
        },
        onchange(payload) {
            if (typeof payload !== 'string') return;
            try {
                payload = payload.replace('\n', '');
                payload = JSON.parse(payload);
                this.creating = this.creating ? payload : this.creating;
                this.placeholder = this.placeholder ? payload : this.placeholder;
                this.updating = this.updating ? payload : this.updating;
                this.bus.$emit('error', '');
            } catch (e) {
                this.bus.$emit('error', 'Invalid JSON');
            }
        },
        oncancel() {
            this.creating = null;
            this.updating = null;
            this.active = false;
            this.placeholder = { path: '/search/:query', dest: 'https://google.com?q=:query' };
        },
    },
    computed: {
        links_count() {
            return Object.keys(this.links).length;
        },
        table_class() {
            return {
                seven: this.active,
                bor: this.active,
                twelve: !this.active,
            };
        },
        active_class() {
            return {
                five: this.active,
                zero: !this.active,
            };
        },
    },
};
</script>
