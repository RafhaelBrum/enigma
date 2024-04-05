// se voce esta vendo isso, está perdendo a graça do enigma.
document.getElementById("enigmaForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const respostaUsuario = document.getElementById("resposta").value.trim().toLowerCase();
    const respostaCorreta = "bonita";
    const respostaDica1 = "pentagrama";
    const respostaDica2 = "hexagono";
    const respostaDica22 = "hexágono";
    const respostaDica3 = "coelho"


    if (respostaUsuario === respostaDica1) {
        document.querySelector("p").innerText = "E agora?\n54.35967, 41.32853";
    }
    else if (respostaUsuario === respostaDica2 || respostaUsuario === respostaDica22) {
        document.querySelector("p").innerText = "Dessa vez chegue um pouco mais perto.\n49.9179962, 19.9373255";
    }
    else if (respostaUsuario === respostaDica3) {
        document.querySelector("p").innerText = "Enquanto você perdia tempo, a resposta sempre esteve aqui.";
    }
    else if (respostaUsuario === respostaCorreta) {
        window.location.href = "../level11/11-pasdmggpew.html";
    } else {
        alert("Resposta incorreta. Tente novamente.");
    }
});
