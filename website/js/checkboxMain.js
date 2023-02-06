const checkboxItemEl = document.querySelector('#checkboxItemDark')
const menuDark = document.querySelector('.menu-dark')
const checkboxDarkEl = document.querySelector('#checkboxDark')
const checkboxLightEl = document.querySelector('#checkboxLight')
const checkboxFantasyEl = document.querySelector('#checkboxFantasy')
const pageEl = document.querySelector('.page')
const menuEl = document.querySelector('.menu')
const modalWrapperEl = document.querySelectorAll('.modal-wrapper')
const modalCloseBtnCheckboxEl = document.querySelector('#modalCloseBtnCheckbox')
const checkboxBtnEl = document.querySelector('#checkboxBtn')

checkboxBtnEl.addEventListener('click', () => {
    setCookie('theme', theme, 365)
})

const checkboxAll = document.querySelectorAll('.checkboxTheme')

let theme = getCookie('theme')

if (theme === 'dark') {
    addDarkTheme()
} else if (theme === 'fantasy') {
    addFantasyTheme()
} else {
    theme = 'light'
}

dropdownBtnThree.addEventListener('click', () => {
    if (theme === 'dark') {
        checkboxDarkEl.checked = true
    } else if (theme === 'fantasy') {
        checkboxFantasyEl.checked = true
    } else {
        checkboxLightEl.checked = true
    }
})

modalCloseBtnCheckboxEl.addEventListener('click', () => {

    let newTheme = getCookie('theme')

    if (newTheme === undefined) {
        newTheme = 'light'
    }
    if (newTheme === theme) {
        return
    }
    // отменяем тему из переменной theme
    if (theme === 'dark') {
        removeDarkTheme()
    } else if (theme === 'fantasy') {
        removeFantasyTheme()
    }
    // применяем тему из cookie
    if (newTheme === 'dark') {
        addDarkTheme()
    }
    if (newTheme === 'fantasy') {
        addFantasyTheme()
    }
    theme = newTheme

    checkboxBtnEl.forEach((el) => el.checked = false)
})

function removeDarkTheme() {
    document.body.removeAttribute('dark')
    menuEl.style.backgroundColor = `#fff`
}

function removeFantasyTheme() {
    pageEl.classList.remove('body-fantasy')
    menuEl.classList.add('menu')
    menuEl.style.backgroundColor = `#fff`
    modalWrapperEl.forEach(el => el.classList.add('modal-wrapper'))
}

function addDarkTheme() {
    document.body.setAttribute('dark', '')
    menuEl.style.backgroundColor = `#9c9c9c`
}

function addFantasyTheme() {
    pageEl.classList.toggle('body-fantasy')
    menuEl.classList.remove('menu')
    menuEl.classList.add('menu-fantasy')
    menuEl.style.backgroundColor = `#06f5d544`
    modalWrapperEl.forEach(el => el.classList.remove('modal-wrapper'))
    modalWrapperEl.forEach(el => el.classList.add('modal-wrapper-fantasy'))
}


checkboxAll.forEach(el =>
    el.addEventListener('click', (e) => {
        const dataTheme = e.target.getAttribute('data-theme')
        const enabled = e.target.checked

        // если подсвечен(включен) чекбокс
        if (enabled) {
            //то перебираем все элементы класса checkbox-item
            checkboxAll.forEach(checkbox => {
                // если один из элементов не нажат
                if (checkbox !== e.target) {
                    const checkboxTheme = checkbox.getAttribute('data-theme')
                    // если мой атрибут равен темной теме
                    if (checkboxTheme === 'dark') {
                        // то удалить темную тему
                        removeDarkTheme()
                    } else if (checkboxTheme === 'fantasy') {
                        // удалить фантазийную тему
                        removeFantasyTheme()
                    }
                    // элемент с методом checked = false
                    checkbox.checked = false
                }
            })
            // иначе, если мой атрибут равен темной теме
            // то удалить темную тему
            // в ином случае если(мой атрибут = фантаз теме), 
            //то удалить фантаз тему
            // и поставить true на светлую тему
        } else {
            if (dataTheme === 'dark') {
                removeDarkTheme()
            } else if (dataTheme === 'fantasy') {
                removeFantasyTheme()
            }
            checkboxLightEl.checked = true
        }

        // если мой атрбут будет = светлой теме и включен или не вкл
        // то ставить светлую тему
        if ((dataTheme === 'light' && enabled) || !enabled) {
            // переменная theme возвращает куки той темы, которую user выберет
            theme = 'light'
        }

        if (dataTheme === 'dark' && enabled) {
            addDarkTheme()
            theme = 'dark'
        }
        if (dataTheme === 'fantasy' && enabled) {
            addFantasyTheme()
            theme = 'fantasy'
        }
    }))


