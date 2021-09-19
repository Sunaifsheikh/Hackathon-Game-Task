let emailMust = document.querySelector(".login_email");
let passwordMust = document.querySelector(".login_password");
let subbtn = document.querySelector("login_btn");
login_btn.disabled = true; 
login_email.addEventListener("change", stateHandle);
login_password.addEventListener("change", stateHandle);
function stateHandle() {
    if (document.querySelector(".login_email").value ==="" || document.querySelector(".login_password").value ==="") 
    {
      login_btn.disabled = true; 
    } else {
      login_btn.disabled = false; 
    }
}
//........

// login function
function login() {
  const useremail = document.getElementById("login_email").value;
  const userpassword = document.getElementById("login_password").value;
  firebase.auth().signInWithEmailAndPassword(useremail,userpassword)
      .then((userCredential) => {
          const user = userCredential.user;
          window.location.href="start.html"
      })
      .catch((error) => {       
          const errorCode = error.code;
          const errorMessage = error.message;
          window.alert("Login failed \nInvalid Email or Password");
      });
}
//........
function signup() {
    const useremail = document.getElementById("login_email").value;
    const userpassword = document.getElementById("login_password").value;
firebase.auth().createUserWithEmailAndPassword(useremail, userpassword)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}




