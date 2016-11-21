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
                    <vlink :link="link" :bus="bus" v-for="(link, index) in links"/>
                </tbody>
            </table>
        </div>
        <!-- Edit Container -->
        <div v-if="editing" class="columns" :class="edit_class">
            <request :submit="submit" :cancel="cancel" :bus="bus"></request>
        </div>
    </div>
</div>

</template>

<script>

import state from '../js/state'
import request from './request'
import vlink from './vlink'
import Vue from 'vue'

export default {
    name: 'links',
    components: {
        request,
        vlink
    },
    data() {
        return {
            bus: new Vue(),
            editing: false,
            user: state.user,
            links: [{
                id: 'link_1',
                path: '/:search',
                dest: 'google.com/:search'
            }, {
                id: 'link_2',
                path: '/:version/*',
                dest: 'd123.cloudfront.aws.com/:version/*'
            }],
        }
    },
    created() {
        this.bus.$on('edit', this.edit)
        this.bus.$on('submit', this.submit)
        this.bus.$on('cancel', this.cancel)
    },
    methods: {
        submit() {
            console.log('submit')
        },
        edit() {
            this.editing=true
        },
        cancel() {
            this.editing=false;
        }
    },
    computed: {
        table_class() {
                return {
                    six: this.editing,
                    bor: this.editing,
                    twelve: !this.editing
                }
        },
        edit_class() {
            return {
                six: this.editing,
                zero: !this.editing
            }
        }
    }
}

</script>
