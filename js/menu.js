const hamburguer= document.querySelector('.hamburguer')
const menu= document.querySelector('.menu-navegacion')
//Evento o Metodo click, es decir es mi escuchador 
hamburguer.addEventListener('click',()=>{

    menu.classList.toogle("spread")//define la velociadad del menu
  
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
    && e.target != menu && e.target != hamburguer
    ){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
    
})