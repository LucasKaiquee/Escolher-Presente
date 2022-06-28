function clicar1(){
    var a = document.getElementsByClassName('p1')[0];
    a.innerHTML = 'Seu presente será:😋';

    setTimeout(() => {
        let veri = document.getElementById('frase');
        let teste = document.getElementsByClassName('ct')[0];
        veri.style.color = 'aqua';
        teste.style.justifycontent = 'center';
        teste.style.background = 'blue';
        teste.style.color = 'white';
        teste.innerHTML = ' Uma caixa com chocolates de gente rica e outra coisa que é SURPRESA  🤭 <br> <br>Não vale escolher de novo !';

    }, "1500")
}

function clicar2(){
    var b = document.getElementsByClassName('p2')[0];
    b.innerHTML = 'Seu presente será:😊';

    setTimeout(() => {
        let veri = document.getElementById('frase');
        let teste = document.getElementsByClassName('ct2')[0];
        veri.style.color = 'aqua';
        teste.style.background = 'pink';
        teste.style.color = 'black';
        teste.innerHTML = ' Um perfuminho 🤗 <br> <br>Não vale escolher de novo !';
    }, "1500")
  
}

function clicar3(){
    var c = document.getElementsByClassName('p3')[0];
    c.innerHTML = 'Seu presente será:  😏';

    setTimeout(() => {
        let veri = document.getElementById('frase');
        let teste = document.getElementsByClassName('ct3')[0];
        veri.style.color = 'aqua';
        teste.style.background = 'purple';
        teste.style.color = 'white';
        teste.innerHTML = 'Você vai ganhar um conjuntinho de coisas para a pele. 🐸 <br> <br>Não vale escolher de novo !'
    }, "1500")
    
}








