const menuToggle = document.querySelector("nav .menu-toggle input")
const nav = document.querySelector("nav ul")

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide')
})