const body= document.querySelector('body')

const itensMenu = [
    { nome: 'Início', url: 'index.html' },
    { nome: 'Sobre', url: 'sobre.html' },
    { nome: 'Contato', url: 'contato.html' }
    ];

function criarHTML(){
    const header = document.createElement('header')  
    body.appendChild(header)
    const nav= document.createElement('nav')
    header.appendChild(nav)
    const ul = document.createElement('ul')
    nav.appendChild(ul)
    return ul
}

function addItens(ul){
    itensMenu.forEach(item=>{

        const li = document.createElement('li')
        const link = document.createElement('a')
        link.textContent= item.nome
        link.style.color= "white"
        link.style.fontFamily= 'Arial'
        ul.style.height= '40px'
        link.setAttribute('href', item.url)
        link.style.textDecoration= 'none'

        ul.appendChild(li)
        li.appendChild(link)
        
    
    })
}

    


addItens(criarHTML())
