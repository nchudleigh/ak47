var email_input = new Vue.component({
    el: '#email_input',
    data: {
        email_address: "",
        error_message: "",
    },
    methods: {
        validate: function() {
            if (this.email_address.includes("@") &&
                this.email_address.includes(".")) {
                console.log("Okay!")
                this.error_message = ""
            } else {
                this.error_message = "Invalid email address"
            }
        }
    }
});


var copybox = Vue.component(
    'copybox', {
        template: "<input id='box' value='{{content}}'><button data-clipboard-target='#box'>Copy</button>",
        props: ["content"],
        methods: {

        }
    }
)


var ak47 = new Vue({
    el: "#ak47",
    data: {
        currentRoute: window.location.pathname,
        user: {},
        links: {}
    },
    methods: {}
});
