const passwordWithoutNumbers = /^[A-Za-z]+$/;
const passwordWithoutUpperCase = /[A-Z]/;
const passwordWithoutLowerCase = /[a-z]/;

function validatePassword(password) {
    // Sprawdzanie czy hasło ma przynajmniej 8 znaków
    if (password.length < 8) {
        return 'Password must be longer than 8 characters.';
    }
    // Sprawdzanie czy hasło zawiera duże i małe litery
    if (!passwordWithoutUpperCase.test(password) ||
        !passwordWithoutLowerCase.test(password)) {
        return 'Password must contain both uppercase and lowercase letters.'
    }
    // Sprawdzanie czy hasło zawiera cyfry
    if (passwordWithoutNumbers.test(password)) {
        return 'Password must contain numbers.';
    }
}

window.addEventListener("load", (event) => {
    const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("login-form-submit");
    const loginErrorMsg = document.getElementById("login-error-msg");

    // Funkcja która zostanie wywołana gdy klikniemy przycisk 'Login'
    loginButton.addEventListener("click", (e) => {
        e.preventDefault();
        const password = loginForm.password.value;
        
        // Walidacja hasła
        const resultMessage = validatePassword(password)
        
        // Jeśli walidacja się nie udała, wyświetlamy powód
        if (resultMessage) {
            loginErrorMsg.innerHTML = resultMessage;
            loginErrorMsg.style.opacity = 1;
        } 
        // W przeciwnym wypadku wyświetlamy komunikat o pomyślnym zalogowaniu
        else {
            alert("You have successfully logged in.");
            location.reload();
        }
    })
})
