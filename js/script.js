const footerText = document.querySelector('.footer__text');
const footerBtn = document.querySelector('.footer__btn');

footerBtn.addEventListener('click', function () {
    footerText.classList.toggle('activeBlack')
})