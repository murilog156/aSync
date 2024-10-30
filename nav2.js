
const geraProc = document.getElementById('geradorProcID')
const geraAtpv = document.getElementById('geradorAtpvID')
const procForm = document.getElementById('procFormulario')
let verificaCPF = null
let menuAberto = "homepage"

console.log(verificaCPF)
console.log(menuAberto)

document.querySelectorAll('.menuBtns').forEach(botao => {

    botao.addEventListener('click', () => {

        const alvo = document.getElementById(botao.dataset.alvo);

        document.querySelectorAll('.dropdown').forEach(dropdown => {

            if (dropdown !== alvo) {

                dropdown.classList.remove('ativo');

            }
        });

        alvo.classList.toggle('ativo');

    });
});

function cpfMask(v) {
    v = v.replace(/\D/g, "");                      // Remove tudo que não é dígito
    v = v.replace(/(\d{3})(\d)/, "$1.$2");         // Coloca ponto após o terceiro dígito
    v = v.replace(/(\d{3})(\d)/, "$1.$2");         // Coloca ponto após o sexto dígito
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");   // Coloca hífen após o nono dígito
    return v;
}

// Função para validar CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");  // Remove não-dígitos

    // Verifica se o CPF tem 11 dígitos ou é uma sequência inválida
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

    // Função auxiliar para calcular o dígito verificador
    const calcularDigito = (base) => {
        let soma = 0;
        for (let i = 0; i < base.length; i++) {
            soma += parseInt(base.charAt(i)) * (base.length + 1 - i);
        }
        const resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    };

    // Calcula os dois dígitos verificadores
    const digito1 = calcularDigito(cpf.substring(0, 9));
    const digito2 = calcularDigito(cpf.substring(0, 9) + digito1);

    // Verifica se os dígitos calculados conferem com os do CPF
    return digito1 === parseInt(cpf.charAt(9)) && digito2 === parseInt(cpf.charAt(10));
}

// Evento para aplicar a máscara e validar o CPF ao digitar
function aplicarMascaraEValidar(input) {
    input.value = cpfMask(input.value);
    const cpfSemMascara = input.value.replace(/\D/g, "");

    const mensagem = document.getElementById("mensagem");
    if (cpfSemMascara.length === 11) {
        if (validarCPF(cpfSemMascara)) {

            verificaCPF = "1"

        } else {
            mensagem.textContent = "CPF Inválido!";
            mensagem.style.color = "red";
        }
    } else {
        mensagem.textContent = "";
    }
}





function abrir(type) {

    if (type == 'geradorProcuracao') {
        fechaTudo()
        geraProc.style.display = 'flex';
        menuAberto = "procuracao"
        console.log(menuAberto)
    }

    if (type == 'geradorAtpv') {

        fechaTudo()
        geraAtpv.style.display = 'flex';
        menuAberto = "atpv"
        console.log(menuAberto)

    }

    if (type == 'homePage') {

        fechaTudo()
        menuAberto = "homepage"
        console.log(menuAberto)
    }

}
function fechaTudo() {

    geraProc.style.display = "none"
    geraAtpv.style.display = "none"



}

procForm.addEventListener('submit', function gerarProc() {

})

function gerarProc(event) {
    const dadosProcPf = {

        proprietario: document.getElementById('proprietarioNome').value,
        cpfProprietario: document.getElementById('proprietarioCpf').value,
        proc1: document.getElementById('procurador1Nome').value,
        proc1Cpf: document.getElementById('procurador1Cpf').value,
        proc2: document.getElementById('procurador2Nome').value,
        proc2Cpf: document.getElementById('procurador2Cpf').value,
        proc3: document.getElementById('procurador3Nome').value,
        procCpf: document.getElementById('procurador3Cpf').value,
        placa: document.getElementById('placaProc').value,
        renavam: document.getElementById('renavamProc').value,
        chassi: document.getElementById('chassiProc').value,
        marca: document.getElementById('marcaModeloProc').value,
        ano: document.getElementById('anoProc').value

    }
    event.preventDefault()

    window.open(`./docsaida.html?proprietario=${dadosProcPf.proprietario}&
cpfProprietario=${dadosProcPf.cpfProprietario}&
procurador1=${dadosProcPf.proc1}&
procurador1Cpf=${dadosProcPf.proc1Cpf}&
procurador2=${dadosProcPf.proc2}&
procurador2Cpf=${dadosProcPf.proc2Cpf}&
procurador3=${dadosProcPf.proc3}&
procurador3Cpf=${dadosProcPf.procCpf}&
placa=${dadosProcPf.placa}&
renavam=${dadosProcPf.renavam}&
chassi=${dadosProcPf.chassi}&
marca=${dadosProcPf.marca}&
ano=${dadosProcPf.ano}&`)

    console.log(dadosProc)

}




