// MENU HAMBURGER
const btn = document.querySelector('#toggle-btn')
const ul = document.querySelector('#ulref')
const li = document.querySelectorAll('#ulref li')



btn.onclick = () => {
    ul.style.opacity == 0 ? ul.style.opacity = 1 : ul.style.opacity = 0
}

// CARROUSEL
const carrousel = document.querySelector('.images')
const prev = document.querySelector('#gauche')
const next = document.querySelector('#droite')

let translate = 0;

prev.onclick = () => {
    translate += 100;
    if (translate > 0)
        translate = -200
    carrousel.style.transform = 'translateX(' + translate + "%";
}
next.onclick = () => {
    translate -= 100;
    if (translate < -200)
        translate = 0
    carrousel.style.transform = 'translateX(' + translate + "%";
}


ul.forEach((li) => {
    li.addEventListener('click', (e) => {
        removeActiveClasses();
        li.classList.add('active');
        //li.style.backgroundColor = '#f8b800';
       
    })
})

function removeActiveClasses(){
    ul.forEach(li => {
        li.classList.remove('active');
        
    }) 
}
