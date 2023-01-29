const operatorEl = document.querySelector('#middle')
const leftEl = document.querySelector('#left')
const rightEl = document.querySelector('#right')
const container = document.querySelector('.container')
const formulaEl = document.querySelector('.formula')

let middleListener = () => {
    operatorEl.innerHTML = `=`
}

operatorEl.addEventListener('mouseover',
    middleListener)

let leftListener = () => {
    operatorEl.innerHTML = `&gt;`
}

leftEl.addEventListener('mouseover', leftListener)

let rightListener = () => {
    operatorEl.innerHTML = `&lt;`
}

rightEl.addEventListener('mouseover',
    rightListener)

const modal = document.querySelector('.modal')

container.addEventListener('click', () => {
    operatorEl.removeEventListener('mouseover', middleListener)
    leftEl.removeEventListener('mouseover', leftListener)
    rightEl.removeEventListener('mouseover', rightListener)

    if (operatorEl.innerHTML === answer) {
        modal.classList.add('modal__active', 'modal-close')
        modal.innerHTML = 'Вы выбрали верно!'
    } else {
        modal.classList.add('modal__active', 'modal-close')
        modal.innerHTML = 'Попробуйте еще раз'
    }
})

modal.addEventListener('click', () => {
    if (operatorEl.innerHTML === answer) {
        const cookieParse = JSON.parse(getCookie('clientProgress'))
        cookieParse.push(currentLevel.key)
        setCookie('clientProgress', JSON.stringify(cookieParse), 365)
    }
    location.reload()
})
