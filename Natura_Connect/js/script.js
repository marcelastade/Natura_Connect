$(document).ready(function() {
    function atualizarVisibilidade() {
        // Verifica qual botão está ativo e ajusta a visibilidade dos campos
        if ($('.btn-toggle .btn.cliente').hasClass('active')) {
            $('#tipoUsuario').val('cliente');
            $('.cliente-only').show();
            $('.consultora-only').hide();
            $('.cepcliente-only').show();
            $('.cepconsultora-only').hide();
            $('.ruacli').show();
            $('.ruacon').hide();
        } else if ($('.btn-toggle .btn.consultora').hasClass('active')) {
            $('#tipoUsuario').val('consultora');
            $('.cliente-only').show();
            $('.consultora-only').show();
            $('.cepconsultora-only').show();
            $('.cepcliente-only').hide();
            $('.ruacon').show();
            $('.ruacli').hide();
        }
    }

    // Inicializa a visibilidade ao carregar a página
    atualizarVisibilidade();

    // Atualiza a visibilidade quando um botão é clicado
    $('.btn-toggle .btn').click(function() {
        // Remove a classe 'active' de todos os botões e a classe 'btn-primary' se presente
        $('.btn-toggle .btn').removeClass('active');
        $('.btn-toggle .btn').removeClass('btn-primary').addClass('btn-default');

        // Adiciona a classe 'active' e a classe 'btn-primary' ao botão clicado
        $(this).addClass('active').removeClass('btn-default').addClass('btn-primary');

        // Atualiza o valor do campo oculto com base no botão clicado
        atualizarVisibilidade();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const consulta = document.querySelector('.consulta');
    if (consulta) {
        consulta.style.maxHeight = `${consulta.scrollHeight}px`;
    }
});

const togglePassword = document.querySelector('#togglePass');
const togglePassword2 = document.querySelector('#togglePass2');
const password = document.querySelector('#password');
const confpassword = document.querySelector('#confpassword');

togglePassword.addEventListener("click", function () {
    const type = password.type === "password" ? "text" : "password";
    password.type = type;
    this.classList.toggle("bi-eye");
    this.classList.toggle("bi-eye-slash");
});

togglePassword2.addEventListener("click", function () {
    const type = confpassword.type === "password" ? "text" : "password";
    confpassword.type = type;
    this.classList.toggle("bi-eye");
    this.classList.toggle("bi-eye-slash");
});


//máscara

const masks = {
    cpf(value) {
        return value
            .replace(/\D/g, '') // Remove todos os caracteres não numéricos
            .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona um ponto após os primeiros três dígitos
            .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona um ponto após os próximos três dígitos
            .replace(/(\d{3})(\d{1,2})/, '$1-$2') // Adiciona um hífen antes dos últimos dois dígitos
            .replace(/(-\d{2})\d+?$/, '$1'); // Impede que mais dígitos sejam digitados após os dois últimos
    },

    tel(value) {
        return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
        .replace(/(-\d{4})\d+?$/, '$1') 
    },

    cep(value) {
        return value
            .replace(/\D/g, '') // Remove todos os caracteres não numéricos
            .replace(/(\d{5})(\d)/, '$1-$2') // Adiciona um hífen entre os grupos de cinco e três dígitos
            .replace(/(-\d{3})\d+?$/, '$1'); // Impede que mais dígitos sejam digitados após os últimos três
    }
};

document.querySelectorAll('input[data-js]').forEach(($input) => {
    const field = $input.dataset.js;

    $input.addEventListener('input', (e) => {
        if (masks[field]) {
            e.target.value = masks[field](e.target.value);
        }
    }, false);
});

// Validação

const button = document.getElementById('cadastrar');

button.addEventListener('click', (event) => {
    event.preventDefault();
    
    const nome = document.getElementById('nome');

    if (nome.value === '') {
        nome.classList.add("errorInput");
    }

    const cpf = document.getElementById('cpf');

    if (cpf.value === '') {
        cpf.classList.add("errorInput");
    }

    const codigoconsultora = document.getElementById('codigoconsultora');

    if (codigoconsultora.value === '') {
        codigoconsultora.classList.add("errorInput");
    }

    const cepcli = document.getElementById('cepcli');

    if (cepcli.value === '') {
        cepcli.classList.add("errorInput");
    }

    const cepcon = document.getElementById('cepcon');

    if (cepcon.value === '') {
        cepcon.classList.add("errorInput");
    }

    const ruacli = document.getElementById('ruacli');

    if (ruacli.value === '') {
        ruacli.classList.add("errorInput");
    }

    const ruacon = document.getElementById('ruacon');

    if (ruacon.value === '') {
        ruacon.classList.add("errorInput");
    }

    const num = document.getElementById('num');

    if (num.value === '') {
        num.classList.add("errorInput");
    }

    const bairro = document.getElementById('bairro');

    if (bairro.value === '') {
        bairro.classList.add("errorInput");
    }

    const cidade = document.getElementById('cidade');

    if (cidade.value === '') {
        cidade.classList.add("errorInput");
    }

    const estado = document.getElementById('estado');

    if (estado.value === '') {
        estado.classList.add("errorInput");
    }

    const email = document.getElementById('email');

    if (email.value === '') {
        email.classList.add("errorInput");
    }

    const tel = document.getElementById('tel')

    if(tel.value == '')  {
        tel.classList.add("errorInput")
    }

    const password = document.getElementById('password');

    if (password.value === '') {
        password.classList.add("errorInput");
    }

    const confpassword = document.getElementById('confpassword');

    if (confpassword.value === '') {
        confpassword.classList.add("errorInput");
    }

    if (email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1 || (email.value.indexOf(".") - email.value.indexOf("@") === 1)) {
        email.classList.add("errorInput");
    } else {
        email.classList.remove("errorInput");
    }

    if (cpf.value.length <= 13) {
        cpf.classList.add("errorInput");
    } else {
        cpf.classList.remove("errorInput");
    }

    if (cep.value.length <= 8) {
        cep.classList.add("errorInput");
    } else {
        cep.classList.remove("errorInput");
    }
});

document.querySelectorAll('input').forEach(($input) => {
    $input.addEventListener('input', (e) => {
        e.target.classList.remove("errorInput");
    });
});

