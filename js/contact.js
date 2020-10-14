var bt = document.getElementById("enviar");

bt.onclick = function(){

  var nome = document.getElementById("nome").value;
  var sobrenome = document.getElementById("sobrenome").value;
  var email = document.getElementById("email").value;
  var assunto = document.getElementById("assunto").value;
  var mensagem = document.getElementById("mensagem").value;
  if(nome ==""){
    alert("Favor inserir um nome");
  }
  else if(sobrenome ==""){
    alert("Favor inserir um sobrenome");
  }
  else if(email==""){
    alert("Favor inserir um email");
  }
  else if(senha==""){
    alert("Favor inserir uma senha");
  }
  else if(assunto==""){
    alert("Favor inserir o assunto");
  }
  else if(mensagem==""){
    alert("Favor inserir uma mensagem");
  }
  else{
    alert("Obrigada pela mensagem, logo logo iremos respondê-la");
    // window.location='../tela_Professor/menu_professor.html';

  }
}