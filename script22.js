let input = document.querySelector('input')
let text = document.querySelector('textarea')
let btn = document.querySelector('button')
let container = document.querySelector('.container')

btn.addEventListener('click', ()=>{

  if(input.value == '' && text.value == ''){
    alert('Non è possibile creare articolo, i campi sono vuoti')
  }else{
    let div = document.createElement('div')
    div.style.backgroundColor = '#e8dce8' 
    div.style.padding = '10px'
    div.style.marginTop = '10px'
    div.style.border = '2px solid black'
    div.innerHTML = `<h2>${input.value}</h2> <p>${text.value}</p>`
    container.appendChild(div)
    input.value=''
    text.value=''
  }
})