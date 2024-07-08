let clcikme=document.querySelector('.btn')
let hexacode=document.querySelector('h2')
let bkcolor=document.querySelector('.main')
let copy=document.querySelector('.cpb')

let randomnum = Math.floor(Math.random()*16777215)
let randomhexa= '#'+randomnum.toString(16) 
colorpick=()=>{
//   console.log('hi, its exe')
let randomnum = Math.floor(Math.random()*16777215)
let randomhexa= '#'+randomnum.toString(16) 
console.log(randomnum,randomhexa) 
hexacode.innerText=randomhexa
bkcolor.style.backgroundColor=randomhexa
}
getcopy=()=>{
    console.log('coppied')
    navigator.clipboard.writeText(randomhexa)
}

colorpick()

clcikme.addEventListener('click',colorpick)
copy.addEventListener('click',getcopy)
