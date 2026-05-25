function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    // ✅ FIXED HERE
    if (username === "admin" && password === "1234") {

        // ✅ Save login state
        localStorage.setItem("loggedIn", "true");


        // ✅ Redirect
        window.location.href = "index.html";

    } else {
        errorMsg.innerText = "Invalid username or password";
    }
}