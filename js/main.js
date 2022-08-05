const menu_btn = document.getElementById('menu-btn');
const menu_bar = document.getElementById('menu');
const Links = document.querySelectorAll('li');

menu_btn.addEventListener('click' , function(){
    menu_btn.classList.toggle('is-active');
    menu_bar.classList.toggle('came');
})

Links.forEach((Links)=>{
    Links.addEventListener('click',function(){
        menu_btn.classList.toggle('is-active');
        menu_bar.classList.toggle('came');
    })
})