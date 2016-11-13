var email_input = new Vue({
    el: '#email_input',
    data: {
        email_address: "",
        error_message: "",
    },
    methods: {
        validate: function() {
            if (this.email_address.includes("@") &&
                this.email_address.includes(".")) {
                createUser(this.email_address)
                this.error_message = ""
            } else {
                this.error_message = "Invalid email address"
            }
        }
    }
})

var copybox = Vue.component(
    'copybox', {
        template: "<input id='box' type='text' onclick='this.select()' v-model='content'><button data-clipboard-target='#box'>Copy</button>",
        props: ['content']
    }
)

[{
    name: 'vladimir',
    age: 10
}, {
    name: 'austen',
    age: 23
}]


var ak47 = new Vue({
    el: "#ak47",
    data: {
        currentRoute: window.location.pathname,
        user: {
            live_key: ""
        },
        links: {}
    },
    methods: {}
});

var glock = new Net(
    'http://192.168.0.103:8082/', {
        'Content-Type': 'application/json'
    }
);

function createUser(email_address) {
    glock
        .post('users/', {
            email: email_address
        })
        .then(function(response) {
            console.log(response)
        })
}
