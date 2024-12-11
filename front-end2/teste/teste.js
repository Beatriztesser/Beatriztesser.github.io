// const titulo= document.querySelector('h1');
// console.log(titulo.innerHTML)
// console.log(titulo.innerText)
// console.log(titulo.textContent)

// titulo.textContent= 'meu novo parágrafo'

// const body= document.querySelector('body')
// const ancora = document.createElement('a')
// ancora.setAttribute('href', 'https://www.ifro.edu.br')
// ancora.setAttribute('target', 'blanck')
// ancora.textContent= 'Ifro'
// ancora.style.color= '#f00'
// ancora.style.textDecoration= 'none'
// ancora.style.fontWeight= 'bold'
// body.appendChild(ancora)

// const body= document.querySelector('body')

// const lista= document.createElement('ul')
// const item1= documento.createElement('li')
// const item2= documento.createElement('li')
// const item3= documento.createElement('li')

// item1.textContent= 'item-1'
// item2.textContent= 'item-2'
// item3.textContent= 'item-3'

// lista.append(item1)
// lista.append(item2)
// lista.append(item3)

// body.append(lista)


// function some(num1, num2) {
//     const total = num1 + num2;
//     return total;  // Apenas retorna o valor da soma
// }

// // A parte que vai imprimir o resultado deve ser separada:
// const resultado = some(2, 3);
// console.log(resultado);  // Aqui você imprime o resultado quando necessário



const some= (num1,num2)=>{
    const total= num1+num2
    return total
}

resultado= some(2,5)
console.log(resultado)