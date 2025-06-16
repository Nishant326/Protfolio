//toggle icon  nav bar//
let menuIcon = document.querySelector('#menu-icon');

let nav = document.querySelector('.nav')
let cross = document.querySelector("#cross")

menuIcon.addEventListener("click",()=>{
        nav.style.display = "block";
        cross.style.display = "block";
        menuIcon.style.display = "none"

});

cross.addEventListener("click",()=>{
        nav.style.display = "none";
        cross.style.display = "none";
        menuIcon.style.display = "block";
});





let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec=>
    {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.setAttribute('id','');
        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=',+ id, + ']').classList.add('active')

            })
        }
    }
    )
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY>100);
};