// se voce esta vendo isso, está perdendo a graça do enigma.
document.getElementById("enigmaForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const respostaUsuario = document.getElementById("resposta").value.trim().toLowerCase();
    const respostaCorreta = "zona morta";
  
    if (respostaUsuario === respostaCorreta) {
      window.location.href = "../level8/8-oafiejd.html";
    } else {
      alert("Resposta incorreta. Tente novamente.");
    }
  });
  