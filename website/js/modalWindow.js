'use strict';

const balls = document.querySelector('.balls')
const dropBtn = document.querySelectorAll('.dropdown__menu');
// const modalInfo = document.querySelector('.modal__info');
const modalInfoAll = document.querySelectorAll('.modal__info');
const closeBtn = document.querySelector('.modal__close-btn');
const closeBtnAll = document.querySelectorAll('.modal__close-btn');
const dropdownBtnOne = document.querySelector('#dropdown__menu-btn-one');
const dropdownBtnTwo = document.querySelector('#dropdown__menu-btn-two');
const dropdownBtnThree = document.querySelector('#dropdown__menu-btn-three');
const dropdownBtnFour = document.querySelector('#dropdown__menu-btn-four');

const dropdown = document.querySelector('#dropdown')
const modalOne = document.querySelector('#modal_1')
const modalTwo = document.querySelector('#modal_2')
const modalThree = document.querySelector('#modal_3')
const modalFour = document.querySelector('#modal_4')
const modalMain = document.querySelector('#modal')

// dropBtn.forEach((el) => el.addEventListener('click', () => {
//     dropdown.classList.toggle('modal__active')
//     modalInfo.classList.add('modal__active');
// }))

// closeBtn.addEventListener('click', () => {
//     modalInfo.classList.remove('modal__active');
// })

dropdownBtnOne.addEventListener('click', () => {
    showModal(modalOne)
})

dropdownBtnTwo.addEventListener('click', () => {
    showModal(modalTwo)
})

dropdownBtnThree.addEventListener('click', () => {
    showModal(modalThree)
})

dropdownBtnFour.addEventListener('click', () => {
    showModal(modalFour)
})

closeBtnAll.forEach((el) => el.addEventListener('click', () => {
    const modalInfoAllFor = modalInfoAll.forEach((el) => el.addEventListener('click', () => {
        showModal(modalInfoAllFor)
    }))
}))


let modals = [dropdown, modalOne, modalTwo, modalThree, modalFour, modalMain]

function closeAllModals() {
    for (let modal of modals) {
        if (modal.classList.contains('modal__active')) {
            modal.classList.remove('modal__active')
        }
    }
}

function showModal(modal) {
    closeAllModals()
    modal.classList.add('modal__active')
}

function dropdownToggle() {
    for (let modal of modals) {
        if (modal === dropdown) {
            modal.classList.toggle('modal__active')
        } else {
            modal.classList.remove('modal__active')
        }
    }
}

balls.addEventListener('click', dropdownToggle)