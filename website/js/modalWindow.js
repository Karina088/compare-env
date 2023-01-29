const bolls = document.querySelector('.bolls')
const dropdown = document.querySelector('.dropdown')

bolls.addEventListener('click', () => {
    dropdown.classList.toggle('modal__active')
    modalInfo.classList.remove('modal__active')
})

const dropBtn = document.querySelectorAll('.dropdown__menu');
const modalInfo = document.querySelector('.modal__info');
const closeBtn = document.querySelector('.modal__close-btn');


dropBtn.forEach((el) => el.addEventListener('click', () => {
    dropdown.classList.toggle('modal__active')
    modalInfo.classList.add('modal__active');
}))

closeBtn.addEventListener('click', () => {
    modalInfo.classList.remove('modal__active');
})


let modals = [document.querySelector('#bolls'), document.querySelector('#modal_1'), document.querySelector('#modal_2'), document.querySelector('#modal_3'), document.querySelector('#modal_4'), document.querySelector('#modal')]

function closeAll() {
    for (let modal of modals) {
        if (modal.classList.contains('modal__active')) {
            modal.classList.remove('modal__active')
        }
    }

}