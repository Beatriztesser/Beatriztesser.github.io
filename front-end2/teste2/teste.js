// var body = document.querySelector('body');

// var novo = document.createElement('h1'); 
// novo.textContent = 'titulo'; 

// var novo2 = document.createElement('p');
// novo2.textContent = 'novo2 paragrafo';

// var prf2 = document.createElement('p');
// prf2.textContent = 'segundo paragrafo';

// var divv = document.createElement('div');
// divv.appendChild(novo);
// divv.appendChild(novo2);
// divv.insertBefore(prf2, novo2);

// body.appendChild(divv);



// divv.removeChild(novo2)

// novo.onclick= function(){
//     console.log('oii')
// }

p1 = document.querySelector('#p1')
p1.addEventListener('dblclick', (ev) => {
    console.log('clicou no elemento', ev.target)
});
