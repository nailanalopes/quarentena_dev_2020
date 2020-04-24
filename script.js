quantidadelikes=0
function adcionarLike(){
  quantidadelikes=1+quantidadelikes
  botao.innerHTML=quantidadelikes+`${quantidadelikes<=1?" Like":" Likes"}`
 
  
}