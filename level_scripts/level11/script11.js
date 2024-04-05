// se voce esta vendo isso, está perdendo a graça do enigma.
document.getElementById("enigmaForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const respostaUsuario = document.getElementById("resposta").value.trim().toLowerCase();
    const respostaCorreta = "berserker";
    const respostaDica = "bandidos erros eternos kalashnikov sangrento";

    if (respostaUsuario === respostaDica) {
        alert("0 014 03 01 4");
    }
    else if (respostaUsuario === respostaCorreta) {
        window.location.href = "../level12/12-sfodni12.html";
    } else {
        alert("Resposta incorreta. Tente novamente.");
    }
});
