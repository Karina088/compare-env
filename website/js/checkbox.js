const checkboxLightEl = document.querySelector('#checkboxLight')
const checkboxDarkEl = document.querySelector('#checkboxDark')
const checkboxFantasyEl = document.querySelector('#checkboxFantasy')
const pageEl = document.querySelector('.page')


function changeTheme(isChecked) {
    if (isChecked) {
        document.body.setAttribute('dark', '');
    } else {
        document.body.removeAttribute('dark');
    }
}

checkboxFantasyEl.addEventListener('click', () => {
    pageEl.classList.toggle('body-fantasy')
})