const geraProc = document.getElementById('GeradorProcID')
const titBoxMain = document.getElementById('titulosBoxMainID')
const titGeradorProc = document.getElementById('tituloGeradorProcID')

function fechaTudo() {
    geraProc.style.display = 'none';
    titBoxMain.style.display = 'none';
    titGeradorProc.style.display = 'none';
}

function abrir(type) {

    if (type == 'geradorProcuracao') {

        geraProc.style.display = 'flex';
        titBoxMain.style.display = 'flex';
        titGeradorProc.style.display = 'flex';
    }

}

function homePage(){
    fechaTudo()
}