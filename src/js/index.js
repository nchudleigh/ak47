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
        console.log("Okay!")
        this.error_message=""
      }
      else {
        this.error_message="Invalid email address"
      }
    }
  }
})
