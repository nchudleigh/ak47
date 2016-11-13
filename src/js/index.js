var email_input = new Vue({
  el: '#email_input',
  data: {
    email_address: "",
    error_message: "",
  },
  methods: {
    validate: function() {
      if (this.email_address.includes("@")&&
      this.email_address.includes(".")){
        createUser(this.email_address)
        this.error_message=""
      }
      else {
        this.error_message="Invalid email address"
      }
    }
  }
})


var glock = new Net(
  'http://192.168.0.103:8082/',
  {
    'Content-Type' : 'application/json'
  }
);

function createUser(email_address) {
  glock
    .post('users/', {email: email_address})
    .then( function(response) {
        console.log(response)
    })
}
