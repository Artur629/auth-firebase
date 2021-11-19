import {
  getAuth,
  signOut
} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js";

const auth = getAuth();
const fForm = document.getElementById("signout-form");

fForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  signOut(auth)
    .then(() => {
      alert("SIGNED OUT SUCCESFULLY");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      alert(errorMessage);
    });
});
