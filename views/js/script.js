const login_input = document.querySelector("#login-input");
const email_input = document.querySelector("#email-input");
const password_input = document.querySelector("#password-input");
const repeated_password_input = document.querySelector("#repeated-password-input");
const registration_form = document.querySelector("#registration-form");
const theme_btn = document.querySelector("#theme-button");

theme_btn.addEventListener("click", () => {
    document.body.classList.toggle('light-theme'); 
    if (theme_btn.innerHTML == "Light theme")
    {       
        theme_btn.innerHTML = "Dark theme";
    } else {
        theme_btn.innerHTML = "Light theme";
    }
})

login_input.addEventListener("blur", () => login_validation(login_input, 3, 5));
email_input.addEventListener("blur", () => email_validation(email_input));
password_input.addEventListener("blur", () => password_validation(password_input, 8));
repeated_password_input.addEventListener("blur", () => repeated_password_validation(password_input, repeated_password_input));

registration_form.addEventListener("submit", function (event) {
    if (login_validation(login_input, 3, 5))
    if (email_validation(email_input))
    if (password_validation(password_input, 8))
    if (repeated_password_validation(password_input, repeated_password_input))
    registration_form.submit();
    event.preventDefault();
})

function login_validation(login_input,min_len,max_len)
{
    if (login_input === document.activeElement) return;
    const login_len = login_input.value.length;
    if (!login_len){
        alert("Login should not be empty");
        login_input.classList.add("input-error");
        return false;
    }
    else if (login_len < min_len || login_len >= max_len)
    {
        alert("Login length should be between " + min_len + " to " + max_len);
        login_input.classList.add("input-error");
        return false;
    }
    login_input.classList.remove("input-error");
    return true;
}

function email_validation(email_input)
{
    if (email_input === document.activeElement) return;
    const mailformat = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if(email_input.value.match(mailformat)) {
        email_input.classList.remove("input-error");
        return true;
    }
    else {
         alert("E-mail address is not valid!");       
        email_input.classList.add("input-error");
        return false;
    }
}

function password_validation(password_input, min_len)
{
    if (password_input === document.activeElement) return;
    const containsDigits = /^.*[0-9]+.*$/
    const containsLetters = /^.*[a-zA-Z]+.*$/
    const password = password_input.value;

    if( password.length >= min_len &&
        containsDigits.test(password) &&
        containsLetters.test(password) ){
        password_input.classList.remove("input-error");
        return true;
    } else {
        alert("Password length should be more than " + min_len + " symbols, contains digits and letters!");
        password_input.classList.add("input-error");
        return false;
    }
}

function repeated_password_validation(password_input, repeated_password_input)
{
    if (repeated_password_input === document.activeElement) return;
    if (password_input.value === repeated_password_input.value)
    {
        repeated_password_input.classList.remove("input-error");
        return true;
    } else {
        alert("Password mismatch!");
        repeated_password_input.classList.add("input-error");
        return false;
    }
}
