<template lang="html">
    <div class="m1t">
        <div class="p1 border grey">
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
        <!-- Headers -->
        <div class="row m1t">
            <div class="three columns">
                <span class="text mono s bold">
                    Path
                </span>
            </div>
            <div class="three columns">
                <span class="text mono s bold">
                    Destination
                </span>
            </div>
        </div>
        <hr>
        <div v-for="(link, index) in links">
            <div  class="row m1h">
                <div class="three columns">
                    <span class="text mono s">
                        http://<span class="lightgrey">{{user.id}}.glock.link</span>{{link.path}}
                    </span>
                </div>
                <div class="three columns">
                    <span class="text mono s">
                        {{link.dest}}
                    </span>
                </div>
                <div class="six columns"></div>
            </div>
            <hr v-if="index<links.length-1">
        </div>
    </div>
</template>

<script>
import state from '../js/state'
export default {
    name:'links',
    data() {
        return {
            user: state.user,
            links: [
                {path:'/:search', dest:'google.com/:search'},
                {path:'/:version/*', dest:'d123.cloudfront.aws.com/:version/*'},
            ]
        }
    }
}
</script>

<style lang="css">
    code {
        font-weight: normal;
    }

</style>
