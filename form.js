
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAgrxgVS0xFzGR9KA8JztD8fVWNQ89A9m0",
    authDomain: "form-c2d67.firebaseapp.com",
    databaseURL: "https://form-c2d67.firebaseio.com",
    projectId: "form-c2d67",
    storageBucket: "form-c2d67.appspot.com",
    messagingSenderId: "81865203105",
    appId: "1:81865203105:web:4bf78a1c19de3d5353bfe0"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signUp(){
      var email = document.getElementById("email");
      var password = document.getElementById("password");

      const promise = auth.createUserWithEmailAndPassword(email.Value, password.value);
      promise.catch(e => alert(e.message));

      alert("Signed Up");
  }