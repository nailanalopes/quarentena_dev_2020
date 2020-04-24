function calcular(){
  
var data = new Date()
  
  anoatual=data.getFullYear();
  datadenascimento=inputNascimento.value.split("/")
  idade=anoatual-datadenascimento[2]
    botaoCalcular.innerHTML="Idade: "+ idade
}