document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
  
    // Define an array of username-password pairs with Base64 encrypted usernames and passwords
    const users = [
      { username: "QWhtYXQ=", password: "MTIz" }, // "Ahmad" and "123" encrypted with Base64
      { username: "QWxp", password: "MDk5" }, // "Ali" and "099" encrypted with Base64
      { username: "VXphcmQ=", password: "Nzg2" }, // "Uzair" and "786" encrypted with Base64
      { username: "QWJ1", password: "Nzc3" }, // "Abu" and "777" encrypted with Base64
      { username: "VW1hcg==", password: "MTEx" } // "Umar" and "111" encrypted with Base64
    ];
  
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const enteredUsername = document.getElementById("username").value;
      const enteredPassword = document.getElementById("password").value;
  
      // Find the user by username
      const user = users.find((user) => user.username === btoa(enteredUsername));
  
      if (user) {
        // Decode the Base64 password and compare
        const decodedPassword = atob(user.password);
        if (enteredPassword === decodedPassword) {
          alert("Login successful!");
        } else {
          alert("Login failed. Please check your credentials.");
        }
      } else {
        alert("Login failed. Please check your credentials.");
      }
    });
  });
  