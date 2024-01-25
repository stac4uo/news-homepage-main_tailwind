const menuIcon= document.querySelector('#icon-menu')
const blackCover= document.querySelector('#blackmirrow')
const menuMobile= document.querySelector('#menuMobile')
const closeIcon= document.querySelector('#closeIcon')
const body = document.querySelector('body')

const magic =()=>{
    blackCover.classList.toggle('translate-x-[120vw]')
    blackCover.classList.toggle('translate-x-0')
    menuMobile.classList.toggle('translate-x-[75vw]')
    menuMobile.classList.toggle('translate-x-0')
    menuMobile.classList.toggle('duration-500')
    menuMobile.classList.toggle('transition')
    menuMobile.classList.toggle('ease-in')
    body.classList.toggle('h-screen')
    body.classList.toggle('overflow-hidden')

}

menuIcon.addEventListener('click', magic)
closeIcon.addEventListener('click', magic)

