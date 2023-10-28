var mostrarContrasena = document.getElementById('mostrarcontra');
var passwordInput = document.getElementById('contra');

mostrarContrasena.addEventListener("click", function() {
if (passwordInput.type == "password") {
    passwordInput.type = "text";
} else {
    passwordInput.type = "password";
}
});