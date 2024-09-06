const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const socialMediaMenu = document.querySelector('.links');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
    offScreenMenu.classList.toggle('active');
    socialMediaMenu.classList.toggle('hidden');
})