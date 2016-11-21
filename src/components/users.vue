

<template lang="html">

<div class="m1h">
    <div class="p1 bo grey m1h">
        <div class="text mono grey">
            You have to pay to create links- its not like servers are free.
        </div>
        <div class="text sans s bold">
            Payments are processed by Stripe, you can cancel anytime.
        </div>

        <!-- Credit Card Input -->
        <div class="m1t">
            <form v-on:submit.prevent="submit">
                <!-- Name -->
                <div class="m1r ib">
                    <label class="text s2 mono" for="cc_name">Name</label>
                    <input type="text" name="cc_name" autocomplete="cc-name" placeholder="XXXXX XXXXXXXX" size="20">
                </div>
                <!-- Number -->
                <div class="m1r ib">
                    <label class="text s2 mono" for="cc_num">Num</label>
                    <input id="cc_num" name="cc_num" type="text" size="20" placeholder="XXXX XXXX XXXX XXXX" maxlength="16" autocomplete="cc-number">
                </div>
                <!-- Expiry -->
                <div class="m1r ib">
                    <label class="text s2 mono" for="cc_exp">Exp</label>
                    <input id="cc_expmonth" name="cc_exp" type="text" placeholder="XX" size="2" maxlength="2" autocomplete="cc-expmonth">
                    <input id="cc_expyear" name="cc_exp" type="text" placeholder="XX" size="2" maxlength="2" autocomplete="cc-expyear">
                </div>
                <!-- CVC -->
                <div class="m1r ib">
                    <label class="text s2 mono" for="cc_cvc2">CVC</label>
                    <input id="cc_cvc2" name="cc_cvc2" type="text" placeholder="XXX" size="4" maxlength="4" autocomplete="cvc2">
                </div>
                <div class="ib">
                    <input type="button" value="Ok" v-on:click="submit">
                </div>
                {{error_message}}
            </form>
        </div>
    </div>
    <!-- Information -->
    <div class="m2h">
        <div class="">
            <div class="text grey s mono m1t">
                Email
            </div>
            <div class="text mono">
                <span class="bo p25">
                      {{user.email}}
                </span>
            </div>
        </div>
        <div class="m1h">
            <div class="text grey s mono">
                API key
            </div>
            <div class="text mono">
                <span class="bo p25">
                      {{user.live_key}}
                </span>
            </div>
        </div>
        <div class="">
            <div class="text grey s mono m1t">
                Url
            </div>
            <div class="text mono">
                <span class="bo p25">
                      https://{{user.key}}.glock.link
                </span>
            </div>
        </div>
    </div>
</div>

</template>

<script>

import state from '../js/state'

export default {
    name: 'users',
    data() {
        return {
            user: state.user
        }
    },
    submit() {
        Stripe.card.createToken({
            number: document.querySelector('#cc_num').value,
            cvc: document.querySelector('#cc_cvc2').value,
            exp_month: document.querySelector('#cc_expmonth').value,
            exp_year: document.querySelector('#cc_expyear').value,
        }, (response) => {
            console.log('hi i am juan', response);
        });
    }
}

</script>
