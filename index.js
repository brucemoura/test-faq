const animacaoAccordion = document.querySelectorAll(".titulo-icon");
const animacaoAccArray = Array.from(animacaoAccordion)
const claseAtiva = 'ativo'

//essas duas linhas abaixo serve para deixar os dois primeiros comentarios ativos(no caso o titulo e o sebre o titulo)
animacaoAccordion[0].classList.add(claseAtiva);
animacaoAccordion[0].nextElementSibling.classList.add(claseAtiva);
animacaoAccordion[0].children[1].classList.toggle(claseAtiva);


//está função está sendo utilizada para ativar e desativar os comentarios adicionando uma classe chamada ativa as tags no html
function animaAccArrayFun() { 
  this.classList.toggle(claseAtiva)
  this.nextElementSibling.classList.toggle(claseAtiva);
  this.children[1].classList.toggle(claseAtiva)
}



//aqui estamos selecionando um item por vez e modificando eles com um addEvent list
animacaoAccArray.forEach((itensFaq) => {
  itensFaq.addEventListener("click", animaAccArrayFun);
});

//o addEventListener não funciona com um array-like ou com um array por isso usamos um forEach para atacar cada item


/****************************************************************************/