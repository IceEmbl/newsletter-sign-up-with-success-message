const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("email-error");
const article = document.getElementById("article");

if (form && emailInput && errorMessage && article) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if(emailInput.validity.valueMissing) {
            errorMessage.textContent = "Email is required";
            emailInput.classList.add("error");
        }
        else if(emailInput.validity.typeMismatch) {
            errorMessage.textContent = "Valid email required";
            emailInput.classList.add("error");
        }
        else {
            errorMessage.textContent = "";
            emailInput.classList.remove("error");
            const userEmail = document.getElementById("user-email");
            userEmail.textContent = emailInput.value;
            article.classList.add("success");
        }
});
}
