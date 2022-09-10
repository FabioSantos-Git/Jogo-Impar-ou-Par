let placar = 0;
    placarPc = 0;

var tamanho = window.screen.width;

    document.getElementById('computador').innerHTML = '?';

document.getElementById('jogar').addEventListener('click',function numero(){
    let jogador = document.getElementById('player').value,        
        random = (num) => Math.floor(Math.random() * num),
        valor = random (10),
        soma = parseInt (valor) + parseInt (jogador);
    
    document.getElementById('computador').innerHTML = valor;    
        
                 //FAZ A SOMA E INDICA SE É PAR OU IMPAR

    if(soma%2 == 0){ //SE SOBRA DE 2 FOR 0
        document.getElementById('tela').innerHTML =  ' PAR';
        document.getElementById('num').innerHTML =  soma;  

    }else if(soma%2 == 1){ //SE SOBRA DE 2 FOR 1
        document.getElementById('tela').innerHTML =  ' IMPAR';
        document.getElementById('num').innerHTML =  soma;
        
    }else{
        document.getElementById('tela').innerHTML = 'Digite um valor';
        document.getElementById('computador').innerHTML = '?';
        document.getElementById('resposta').innerHTML = '';       
    };

             //IDENTIFICA O BOTAO CLICADO E FAZ COMPARAÇÃO COM O CAMPO  RESULTADO SE DEU O PAR OU IMPAR.

    if(clicou == tela.innerText){        
        document.getElementById('resposta').innerHTML = 'GANHOU';
        document.getElementById('resposta').style.color = 'rgb(3, 185, 3)';
        
    }else if(tela.innerText == 'Digite um valor'){ // SE TELA E MSM MENSAGEM
        document.getElementById('resposta').innerHTML = '';
   
    }else if(clicou == ''){ // SE CLICOU NÃO TIVER VALOR.
        document.getElementById('tela').innerHTML ='IMPAR ou PAR?';
        document.getElementById('computador').innerHTML = '?';
        document.getElementById('num').innerHTML = '';

    }else{
        document.getElementById('resposta').innerHTML = 'PERDEU';
        document.getElementById('resposta').style.color = 'red';        
    };

    // ATUALZA O CAMPO DO JOGO

    if(resposta.innerText == 'GANHOU'){
        document.getElementById("jogar").style.display = "none";
        document.getElementById("icone").style.display = "block";

    }else if(resposta.innerText == 'PERDEU'){
        document.getElementById("jogar").style.display = "none";
        document.getElementById("icone").style.display = "block";        
    }
    
    //ATIVA OS PLACARES
    
    placar  
    placarPc

    if(resposta.innerText == "GANHOU"){
        placar += 1;
    }else if(resposta.innerText == "PERDEU"){
        placarPc += 1;
    }

    if(placar == 1){
        document.getElementById('primeiro').style.backgroundColor = 'rgb(3, 185, 3)';
    }else if(placar == 2){
        document.getElementById('segundo').style.backgroundColor = 'rgb(3, 185, 3)';
    }else if(placar == 3){
        document.getElementById('terceiro').style.backgroundColor = 'rgb(3, 185, 3)';
    };

    if(placarPc == 1){
        document.getElementById('primeiro-pc').style.backgroundColor = 'red';
    }else if(placarPc == 2){
        document.getElementById('segundo-pc').style.backgroundColor = 'red';
    }else if(placarPc == 3){
        document.getElementById('terceiro-pc').style.backgroundColor = 'red';
    }else{
        document.getElementById('terceiro-pc').style.backgroundColor = '';
    }
    //-----------------------------------------------------------//

    //MENSAGEM DE FINAL

    if(placar == 3 ){
        
        document.getElementById('mensagem').innerHTML = 'PARABÉNS, VOCÊ VENCEU!';
        document.getElementById("mensagem").style.display = "block";
        document.getElementById("mensagem").style.backgroundColor = "rgba(0, 128, 0, 0.014)";
        document.getElementById('mensagem').style.color = 'rgb(3, 185, 3)';

    }else if(placarPc == 3){
       
       document.getElementById('mensagem').innerHTML = 'VOCÊ FOI DERROTADO.';
       document.getElementById("mensagem").style.display = "block";
       document.getElementById("mensagem").style.backgroundColor = "rgba(0, 128, 0, 0.014)";
       document.getElementById('mensagem').style.color = 'red';
    }

});

let clicou = '';

function botao(bot){ //FUNCTION DO ONCLICK    
     clicou = bot;         
};



document.getElementById("impar").addEventListener('click',function numero(){  
    

    if(tamanho < "700"){
        this.style.margin = '70px 170px 10px';
        document.getElementById("par").style.display = "none";
        this.style.background = "#761BBF"
        
    }else{
        document.getElementById("par").style.display = "none";
    this.style.background = "orange";
    this.style.color = "white";    
    this.style.margin = '70px 231px 10px';
    }
   
});

document.getElementById("par").addEventListener('click',function numero(){
  
    if(tamanho < "700"){
        this.style.margin = '70px 170px 10px';
        document.getElementById("impar").style.display = "none";
        this.style.background = "#761BBF"
    }else{
        document.getElementById("impar").style.display = "none";
    this.style.background = "orange";
    this.style.color = "white";    
    this.style.margin = '70px 231px 10px';
    }    
});

document.getElementById("icone").addEventListener('click', function (){
    placar  
    placarPc
    clicou = '';
   

    document.getElementById("jogar").style.display = "block";
    document.getElementById("icone").style.display = "none";
    document.getElementById('tela').innerHTML = 'RESULTADO';
    document.getElementById('computador').innerHTML = '?';
    document.getElementById('player').value = '';
    document.getElementById('num').innerHTML = '';
    document.getElementById("impar").removeAttribute("style");
    document.getElementById("par").removeAttribute("style");
    document.getElementById('resposta').innerHTML = '';

    if(placar == 3 ){
        window.location.reload()  

    }else if(placarPc == 3){
       window.location.reload()

    }   
});





