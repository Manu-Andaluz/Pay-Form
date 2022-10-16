// Cards img
const card1 = document.getElementById('card-1');
const card2 = document.getElementById('card-2');

//Form
const form = document.getElementById('form')

//Inputs
const inputName = document.getElementById('Name')
const inputNumber = document.getElementById('numberId')
const inputMonth = document.getElementById('Month')
const inputYear = document.getElementById('Year')
const inputCvc = document.getElementById('Cvc')

//Card Img
const cardNumber = document.getElementById('cardNumber')
const cardName = document.getElementById('cardName')
const cardDate = document.getElementById('cardDate')
const cardCvc = document.getElementById('cardCvc')

inputName.addEventListener('input', () => {
    cardName.innerText = inputName.value.toUpperCase()
})


inputNumber.addEventListener('input', () => {
    cardNumber.innerText = inputNumber.value.match(/.{1,4}/gi).join(' ');
})

inputMonth.addEventListener('input', () => {
    cardDate.innerText = `${inputMonth.value} / ${inputYear.value}`
})


inputYear.addEventListener('input', () => {
    cardDate.innerText = `${inputMonth.value} / ${inputYear.value}`
})

inputCvc.addEventListener('input', () => {
    if (Number(inputCvc.value)) {
        cardCvc.innerText = inputCvc.value
    }
})
