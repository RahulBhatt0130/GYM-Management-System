// Login function
function loginUser(email, password, redirectPage) {
    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            alert("Login Successful!");
            window.location.href = redirectPage;
        })
        .catch(err => alert(err.message));
}

// Logout function
function logoutUser() {
    auth.signOut().then(() => {
        alert("Logged out successfully!");
        window.location.href = "index.html";
    });
}
