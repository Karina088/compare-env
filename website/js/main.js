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

container.addEventListener('click', () => {
    operatorEl.removeEventListener('mouseover', middleListener)
    leftEl.removeEventListener('mouseover', leftListener)
    rightEl.removeEventListener('mouseover', rightListener)

    modalMain.innerHTML = operatorEl.innerHTML === answer
        ? 'Вы выбрали верно!'
        : 'Попробуйте еще раз';
    showModal(modalMain)
})

modalMain.addEventListener('click', () => {
    if (operatorEl.innerHTML === answer) {
        const cookieParse = JSON.parse(getCookie('clientProgress'))
        cookieParse.push(currentLevel.key)
        setCookie('clientProgress', JSON.stringify(cookieParse), 365)
    }
    location.reload()
})
