var msgNumbers = document.getElementById("msg-only-numbers");
var msgSuccess = document.getElementById("success");
var msgError = document.getElementById("error");

msgNumbers.style.display = "none";


function validaCPF(cpf){
  function onlyNumbers(str) {
    return /^\d+$/.test(str);
  }
  
  if(onlyNumbers(cpf) != true) {    
    msgNumbers.style.display = "block";
    msgError.style.display = "block";
    msgSuccess.style.display = "none";
  } else {
    msgNumbers.style.display = "none";
    if(cpf.length != 11) {   
      msgError.style.display = "block";
      msgSuccess.style.display = "none"; 
    } else {
      msgError.style.display = "none";   
      msgSuccess.style.display = "block";   
    }
  }
}


function validacao(){  
  var cpf = document.getElementById("cpf-field").value;

  var resultadoValidacao = validaCPF(cpf);   
}