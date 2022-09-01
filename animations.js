
//codigo efeito digitação

const inicio = document.querySelector('#inicio > .apresentacao');

function text(){
   const blink = document.querySelector('.blink');
   const textBlink = blink.innerHTML.split('');
   blink.innerHTML = '';

   printText(textBlink,blink)
}

text()

function printText(el,print){

   el.forEach((caractere, i)=>{
      setTimeout(()=>{print.innerHTML += caractere},300* i)
   })

}


