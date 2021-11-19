import {
  getAuth,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js";

const auth = getAuth();
const fForm = document.getElementById("signout-form");
const SOut = document.getElementById("signout");

fForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const signout = SOut.value;
  console.log(signout);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      alert("STATE CHANGED: User is signed in");
      // ...
    } else {
      // User is signed out
      // ...
      alert("STATE CHANGED: User signed out");
    }
  });
});
