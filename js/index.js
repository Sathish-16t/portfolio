let icon=document.getElementById('burger')
let nav=document.getElementById('nav2')
icon.addEventListener('click',(e)=>{
    nav.classList.toggle('nav2')
    e.stopPropagation()
})
let main=document.getElementById('main')
main.addEventListener('click',()=>{
    nav.classList.remove('nav2')
})

let section=document.querySelectorAll('section')
window.addEventListener('load',()=>{
section.forEach(a=>{
    a.classList.add('fadeleft')
})

})