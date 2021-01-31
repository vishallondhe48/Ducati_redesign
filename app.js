let toggler = document.getElementById('toggler')
let navLinks = document.querySelectorAll('.nav-links')
console.log(navLinks[0].classList)
toggler.addEventListener('click', (e) => {
    console.log('clicked')
    navLinks[0].classList.toggle('active')
    navLinks[1].classList.toggle('active')
})