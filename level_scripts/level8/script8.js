// se voce esta vendo isso, está perdendo a graça do enigma.
document.getElementById("enigmaForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const respostaUsuario = document.getElementById("resposta").value.trim().toLowerCase();
    const respostaCorreta = "";

    if (respostaUsuario === respostaCorreta) {
        alert("Não utilize o teclado!");
    } else {
        alert("Não utilize o teclado!");
    }
});


const botaoSecreto = document.querySelector(".botao-secreto");

botaoSecreto.addEventListener("click", function () {
    console.log("Achou.");
    window.location.href = "../level9/9-03ei923peq.html";
});

botaoSecreto.addEventListener("mouseover", function () {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.querySelector("h2").innerText = "Me achou :) É só clicar!";

    document.querySelectorAll("p").forEach(function (paragraph) {
        paragraph.style.display = "none";
    });

    document.querySelectorAll("input").forEach(function (input) {
        input.style.display = "none";
    });

    document.querySelectorAll("button").forEach(function (button) {
        button.style.backgroundColor = "white";
    });


})

botaoSecreto.addEventListener("mouseleave", function () {
    document.body.style.background = "black";
    document.body.style.color = "white";
    document.querySelector("h2").innerText = "Nível 8";

    document.querySelectorAll("p").forEach(function (paragraph) {
        paragraph.style.display = "block";
    });

    document.querySelectorAll("input").forEach(function (input) {
        input.style.display = "block";
    });

    document.querySelectorAll("button").forEach(function (button) {
        button.style.display = "block";
    });

    document.querySelectorAll("button").forEach(function (button) {
        button.style.backgroundColor = "black";
    });

})
