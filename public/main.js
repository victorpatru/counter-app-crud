// Create the increase, decrease, reset functionality

let counter = 0

const btns = document.querySelectorAll('.btn')

btns.forEach(btn => btn.addEventListener('click', updateValue))

function updateValue() {
    if (event.currentTarget.classList.contains('increase')) {
        counter++
    } else if (event.currentTarget.classList.contains('decrease')) {
        counter--
    } else {
        counter = 0
    }
}