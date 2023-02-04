const checkboxFantasyEl = document.querySelector('#checkboxFantasy')
const pageEl = document.querySelector('.page')
const menuEl = document.querySelector('.menu')
const modalWrapperEl = document.querySelectorAll('.modal-wrapper')

function changeTheme(isChecked) {
    if (isChecked) {
        document.body.setAttribute('dark', '');
    } else {
        document.body.removeAttribute('dark');
    }
}


checkboxFantasyEl.addEventListener('click', () => {
    pageEl.classList.toggle('body-fantasy')
    if (pageEl.classList.contains('body-fantasy')) {
        menuEl.classList.remove('menu')
        menuEl.classList.add('menu-fantasy')
        modalWrapperEl.forEach(el => el.classList.remove('modal-wrapper'))
        modalWrapperEl.forEach(el => el.classList.add('modal-wrapper-fantasy'))
    } else {
        menuEl.classList.add('menu')
        modalWrapperEl.forEach(el => el.classList.add('modal-wrapper'))
    }
})