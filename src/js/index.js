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
