// Create the increase, decrease, reset functionality

const increaseButton = document.querySelector('.increase')
const decreaseButton = document.querySelector('.decrease')
const resetButton = document.querySelector('.reset')
const value = document.getElementById('value').textContent

increaseButton.addEventListener('click', () => {
    fetch('/increaseCounter', {
        method: 'put',
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify({
            'counter': Number(value)
        })
    })
        .then(res => {
            res.json()
            location.reload()
        })
        .catch(err => console.log(err))
})

decreaseButton.addEventListener('click', () => {
    fetch('/decreaseCounter', {
        method: 'put',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
            'counter': Number(value)
        })
       
    })
    .then(res => {
        res.json()
        location.reload()
    })
    .catch(err => console.log(err))
})

resetButton.addEventListener('click', () => {
    fetch('/resetCounter', {
        method: 'put',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            'counter': Number(value)
        })
    })
    .then(res => {
        res.json()
        location.reload()
    })
    .catch(err => console.log(err))
})