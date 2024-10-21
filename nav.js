
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