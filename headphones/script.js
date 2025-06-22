document.addEventListener('DOMContentLoaded', function(){
const hamburger = document.getElementById('.hamburger');
const navmenu = document.getElementById('.nav-menu')

    hamburger.addEventListener('click', () => {
        navmenu.classList.toogle('active');
    })
})
