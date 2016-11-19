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
    </div>
    <div class="row m2t">
        <!-- Table Container -->
        <div class="columns p1b" :class="table_class">
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
                    </tr>
                </thead>

                <!-- List -->
                <tbody class="oh">
                    <tr v-for="(link, index) in links">
                        <td>
                            <span class="text mono s">
                                {{link.path}}
                            </span>
                        </td>
                        <td>
                            <span class="text mono s">
                                {{link.dest}}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- Edit Container -->
        <div v-if="editing" class="columns" :class="edit_class">
            <request body="body" method="'PATCH'" submit="submit">
            </request>
        </div>
    </div>
</div>

</template>

<script>

import state from '../js/state'
import request from './request'

export default {
    name: 'links',
    components: {
        request
    },
    data() {
        return {
            editing: true,
            user: state.user,
            links: [{
                path: '/:search',
                dest: 'google.com/:search'
            }, {
                path: '/:version/*',
                dest: 'd123.cloudfront.aws.com/:version/*'
            }],

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
