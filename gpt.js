
    // Função que aplica máscara e valida CPF para todos os campos dinamicamente
    function validarCamposCPF() {
      const camposCPF = document.querySelectorAll(".campo-cpf");

      camposCPF.forEach((input) => {
        input.addEventListener("input", () => {
          input.value = cpfMask(input.value);
          const cpfSemMascara = input.value.replace(/\D/g, "");
          const mensagem = input.nextElementSibling; // Pega o <span> abaixo do input

          if (cpfSemMascara.length === 11) {
            if (validarCPF(cpfSemMascara)) {
              mensagem.textContent = "CPF Válido!";
              mensagem.style.color = "green";
            } else {
              mensagem.textContent = "CPF Inválido!";
              mensagem.style.color = "red";
            }
          } else {
            mensagem.textContent = "";
          }
        });
      });
    }

    // Inicializa a validação assim que a página é carregada
    window.onload = validarCamposCPF;
 