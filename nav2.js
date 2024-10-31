
const geraProc = document.getElementById('geradorProcID')
const geraAtpv = document.getElementById('geradorAtpvID')
const procForm = document.getElementById('procFormulario')
let menuAberto = "homepage"

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

function preencher() {

    document.getElementById('proprietarioNome').value = "MURILO GRADEL SOUZA BRITO"
    document.getElementById('proprietarioCpf').value = "038.882.260-07"
    document.getElementById('procurador1Nome').value = "MARIO DUARTE SOUZA PEREIRA PINTO"
    document.getElementById('procurador1Cpf').value = "397.001.626-64"
    document.getElementById('procurador2Nome').value = "JECA TATU DO MATO FERRAZ BRAS"
    document.getElementById('procurador2Cpf').value = "038.882.260-07"
    document.getElementById('procurador3Nome').value = "DUARTE SOUZA"
    document.getElementById('procurador3Cpf').value = "038.882.260-07"
    document.getElementById('placaProc').value = "JTV-6591"
    document.getElementById('renavamProc').value = "12345678935"
    document.getElementById('marcaModeloProc').value = "Ferrari 456 GT"
    document.getElementById('chassiProc').value = "9BGKC9103292B3"
    document.getElementById('anoProc').value = "2010 - 2010"
    document.getElementById('corProc').value = "VERMELHO"
}




// Função para aplicar a máscara do CPF
function cpfMask(value) {
    return value
        .replace(/\D/g, "") // Remove tudo que não for dígito
        .replace(/(\d{3})(\d)/, "$1.$2") // Coloca o primeiro ponto
        .replace(/(\d{3})(\d)/, "$1.$2") // Coloca o segundo ponto
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Coloca o hífen
}
// Função para validar se um CPF é válido
function validarCPF(cpf) {
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false; // Valida tamanho e números repetidos

    let soma = 0, resto;

    // Validação do primeiro dígito verificador
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    // Validação do segundo dígito verificador
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;

    return true;

}

// Inicializa a função de validação e máscara ao carregar a página



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

    const qntdProcuradores = {
        proc1: document.getElementById('procurador1Nome').value,
        proc1Cpf: document.getElementById('procurador1Cpf').value,
        proc2: document.getElementById('procurador2Nome').value,
        proc2Cpf: document.getElementById('procurador2Cpf').value,
        proc3: document.getElementById('procurador3Nome').value,
        proc3Cpf: document.getElementById('procurador3Cpf').value,
    }
    const dadosProcPf = {

        proprietario: document.getElementById('proprietarioNome').value,
        cpfProprietario: document.getElementById('proprietarioCpf').value,
        placa: document.getElementById('placaProc').value,
        renavam: document.getElementById('renavamProc').value,
        chassi: document.getElementById('chassiProc').value,
        marca: document.getElementById('marcaModeloProc').value,
        ano: document.getElementById('anoProc').value,
        cor: document.getElementById('corProc').value,

    }
    event.preventDefault()

    verificaQuantosProcuradores(qntdProcuradores)


    window.open(`./docsaida.html?proprietario=${dadosProcPf.proprietario}&cpfProprietario=${dadosProcPf.cpfProprietario}&procurador1=${qntdProcuradores.proc1}&procurador1Cpf=${qntdProcuradores.proc1Cpf}&procurador2=${qntdProcuradores.proc2}&procurador2Cpf=${qntdProcuradores.proc2Cpf}&procurador3=${qntdProcuradores.proc3}&procurador3Cpf=${qntdProcuradores.procCpf}&placa=${dadosProcPf.placa}&renavam=${dadosProcPf.renavam}&chassi=${dadosProcPf.chassi}&marca=${dadosProcPf.marca}&ano=${dadosProcPf.ano}&cor=${dadosProcPf.cor}`)


}










