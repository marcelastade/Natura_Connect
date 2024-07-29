$(document).ready(function() {
    $('.btn-toggle').click(function() {
        $(this).find('.btn').toggleClass('active');  

        if ($(this).find('.btn-primary').length > 0) {
            $(this).find('.btn').toggleClass('btn-primary');
        }
        $(this).find('.btn').toggleClass('btn-default');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const consulta = document.querySelector('.consulta');
    consulta.style.maxHeight = `${consulta.scrollHeight}px`;
});

const togglePassword = document.querySelector('#togglePass');
const password = document.querySelector('#password');

togglePassword.addEventListener("click", function () {
    const type = password.type === "password" ? "text" : "password";
    password.type = type;

    this.classList.toggle("bi-eye");
    this.classList.toggle("bi-eye-slash");
});



