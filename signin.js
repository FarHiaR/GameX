/* Parse.initialize(
    'HtdonF7Ky6A40GMT9kgpXvTtfxl1a7uTDQhrdkag', // YOUR APP ID
    'Ag0Qommcd9onbsDE4zTfU1ksMLM2H2CDRD9gBchh' // YOUR Javascript  KEY
  );
  // YOUR SERVER URL
  Parse.serverURL = 'https://parseapi.back4app.com';
  
logIn();

function logIn() {
    // Create a new instance of the user class
    var user = Parse.User.logIn("username", "password").then(function(user) {
            console.log('User created successful with name: ' + user.get("username") + ' and email: ' + user.get("email"));
    }).catch(function(error){
        console.log("Error: " + error.code + " " + error.message);
    });
} */