function mostrarResumos(){
    const lista = 
    document.getElementById("lista-resumos");
    if (lista.innerHTML === "")
        lista.innerHTML =`<a href="Resumos/0-logica-introducao.pdf" target="_blank">Introducao a Logica</a> 
    <a href="Resumos/1-logica-nocoes-fundamentais.pdf" target="_blank">Nocoes fundamentais da logica</a>`;        
     else {
        lista.innerHTML = "";}        
    }

function mostrarExercicios() {
    const lista = 
    document.getElementById("lista-exercicios");
    if (lista.innerHTML === "")
        lista.innerHTML =`<a href="Resumos/2-Logica-operacoes1.pdf" target="_blank">1_Operacoes, Logica</a> 
    <a href="Resumos/3-Logica-operacoes-2.pdf" target="_blank">2_Operacoes, Logica</a>`;        
     else {
        lista.innerHTML = "";}
}

function  mostrarResumos1() {
    const lista = 
    document.getElementById("lista-resumos-1");
    if (lista.innerHTML === "")
        lista.innerHTML =`<a href="Resumos/Fisica-Moderna-P.2.pdf" target="_blank">Fisica Moderna</a>`;      
     else {
        lista.innerHTML = "";}
}

function  mostrarExercicios1() {
    const lista = 
    document.getElementById("lista-exercicios-1");
    if (lista.innerHTML === "")
        lista.innerHTML =`<a href="exercicios/Fis-12-VB.pdf" target="_blank">A.T. V.B. 2016-pratica</a> 
    <a href="exercicios/Fis-12-VC.pdf" target="_blank">A.T. V.B. 2016-Pratica</a>`;        
     else {
        lista.innerHTML = "";}
}

function  mostrarResumos2() {
    const lista = 
    document.getElementById("lista-resumos-2");
    if (lista.innerHTML === "")
        lista.innerHTML =`<a href="Resumos/estomas-trabalho-complementar.pdf" target="_blank">Resumo sobre Estomas</a>`;        
     else {
        lista.innerHTML = "";}
}
function mostrarExercicios2() {
     const lista = 
    document.getElementById("lista-exercicios-2");
    if (lista.innerHTML === "")
        lista.innerHTML =`<a href="exercicios/(MozEstuda.com)-Biologia 2024 1a Chamada Exames 12a classe 1a chamada 2024.pdf" target="_blank">Pratica-Exame-2024</a> 
    <a href="exercicios/Biologia-2020-12a-Classe-1a-Epoca.pdf" target="_blank">Pratica-Exame-2020</a>`;        
     else {
        lista.innerHTML = "";}
}

function mostrarTrabalhos2() {
     const lista = 
    document.getElementById("lista-trabalhos-2");
    if (lista.innerHTML === "")
        lista.innerHTML =`<a href="trabalhos/Biologia-MARVIN-2026[1].pdf" target="_blank">Estomas-Trabalho-de-Pesquisa</a>`;      
     else {
        lista.innerHTML = "";}
}

function  mostrarResumos3() {
    const lista = 
    document.getElementById("lista-resumos-3");
    if (lista.innerHTML === "")
        lista.innerHTML =`<a href="Resumos/Unidade V-Função base 2025.pdf" target="_blank">Unidade V- Funcao Base</a> 
    <a href="Resumos/Unidade V-Função Sal 2025.pdf" target="_blank">Unidade V-Funcao Sal</a>`;        
     else {
        lista.innerHTML = "";}
}

function mostrarTrabalhos3() {
     const lista = 
    document.getElementById("lista-trabalhos-3");
    if (lista.innerHTML === "")
        lista.innerHTML =`<a href="trabalhos/Unidade VI SOLUCOES 2025.pdf" target="_blank">Solucoes 11a-Quimica</a>`;      
     else {
        lista.innerHTML = "";}
}



function pesquisarDisciplina() {
    let pesquisa = document.getElementById('barrapesquisa').value.toLowerCase();

    let cartoes = document.querySelectorAll('.cartao-disciplina');
    cartoes.forEach(function(cartao){
        let nomeDisciplina = cartao.querySelector("h3").textContent.toLowerCase();
        if (nomeDisciplina.includes(pesquisa)) {
            cartao.style.display = "block";
        } else {
            cartao.style.display = "none";
        }
    });
}