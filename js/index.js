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
  
let hero=document.getElementById('hero')
let expe=document.getElementById('expe')
let skill=document.getElementById('skillset')
let project=document.getElementById('projects')
let about=document.getElementById('about')

window.addEventListener('load',()=>{
    hero.classList.add('fade')
    skill.classList.add('fade')
    about.classList.add('fade')
    expe.classList.add('fade')
    project.classList.add('fade')
})


