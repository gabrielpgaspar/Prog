const email = "prof@prof.com";
const senha = "abc123";

var campoEmail = document.getElementById("email");
var campoSenha = document.getElementById("senha");
var botaoEntrar = document.getElementById("btn-entrar");

botaoEntrar.addEventListener('click', () => {
   
    if(campoEmail.value == "" || campoSenha.value == ""){
        alert("E-mail e senha devem ser preenchidos!");
        return;
    }else if(campoEmail.value.toLowerCase() != email || campoSenha.value != senha) {
        alert("Usuário e senha inválidos");
        return;
    } else {
        window.open("tela-principal.html", "_self");
    }    


})

