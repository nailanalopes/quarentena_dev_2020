function gerar(){
  contador=1000000
    while(contador>0){
        contador=contador-1
        htmldocertificado=emitirCertificado(inputNome.value)
  }
  listalink=[
  "https://codepen.io/NayLopes/pen/RwWPKMV",
  "https://codepen.io/NayLopes/pen/dyYPaVE",
  "https://codepen.io/NayLopes/pen/ExVaOVB",
  "https://codepen.io/NayLopes/pen/gOapmXQ",
  "https://codepen.io/NayLopes/pen/WNQvVvY",
  "https://codepen.io/NayLopes/pen/eYpJMqb",
  "https://codepen.io/NayLopes/pen/KKdVRbL"
  ]
  

  contalink=0
  listalinkcomhtml=""
  while(contalink<7){
   
  link=listalink[contalink]
  listalinkcomhtml=listalinkcomhtml+`<li><a href="${link}">${link}</a></li>`
  contalink=contalink+1
}

document.body.innerHTML=`
${htmldocertificado}
  <ol>
  ${listalinkcomhtml}
  </ol>`

}