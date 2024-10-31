const params = new URLSearchParams(window.location.search);
let nProcuradores = null

const DadosProcPf = {

    proprietario: params.get('proprietario'),
    cpfProprietario: params.get('cpfProprietario'),
    procurador1: params.get('procurador1'),
    cpfproc1: params.get('procurador1Cpf'),
    procurador2: params.get('procurador2'),
    cpfproc2: params.get('procurador2Cpf'),
    procurador3: params.get('procurador3'),
    cpfproc3: params.get('procurador3Cpf'),
    placa: params.get('placa'),
    renavam: params.get('renavam'),
    marcamodelo: params.get('marca'),
    chassi: params.get('chassi'),
    anoveiculo: params.get('ano'),
    cor: params.get('cor')
};

function verificaQuantosProcuradores(parametro) {

    const stringVazia = "";
    if (parametro.proc1 && parametro.proc1Cpf !== stringVazia) {
        nProcuradores = "1Procurador";

    }
    if (parametro.proc2 && parametro.proc2Cpf !== stringVazia) {

        nProcuradores = "2Procurador";
    }
    if (parametro.proc3 && parametro.proc3Cpf !== stringVazia) {

        nProcuradores = "3Procurador";

    }

}

function geraProcuracao() {

}