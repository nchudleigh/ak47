var users = new Net(
  'http://192.168.0.103:8082/users', {
    'Content-Type': 'application/json'
  }
);

const User = {}

User.create = function() {
  users
    .post('/', {
      email: email_address
    })
    .then(function(response) {
      console.log(response)
    })
};
