var cpfField = document.getElementById("cpf-field");  
var msgNumbers = document.getElementById("msg-only-numbers");
var msgSuccess = document.getElementById("success");
var msgError = document.getElementById("error");


msgNumbers.style.display = "none";

//funcao chamada ao clicarno botao validar
function validacao(){  
  
  var cpfFieldValue = cpfField.value;

  function onlyNumbers(str) {
    return /^\d+$/.test(str);
  }
  
  if(onlyNumbers(cpfFieldValue) != true) {    
    msgNumbers.style.display = "block";
    msgError.style.display = "block";
    msgSuccess.style.display = "none";
  }   
  
}