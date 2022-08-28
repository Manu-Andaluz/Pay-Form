// Cards img
const card1 = document.getElementById('card-1');
const card2 = document.getElementById('card-2');

//Form
const form = document.getElementById('form')

//Inputs
const inputName = document.getElementById('Name')
const inputNumber = document.getElementById('numberId')
const inputDate = document.getElementById('Date')
const inputCvc = document.getElementById('Cvc')

//Card Img
const cardNumber = document.getElementById('cardNumber')
const cardName = document.getElementById('cardName')
const cardDate = document.getElementById('cardDate')
const cardCvc = document.getElementById('cardCvc')

cardNumber.innerText = '0000 0000 0000 0000'
cardName.innerText = 'Jane Apllesed'
cardDate.innerHTML = '00/00'
cardCvc.innerText = '000'

inputName.addEventListener('input', () => {
    cardName.innerText = inputName.value
})

inputNumber.addEventListener('input', () => {
    cardNumber.innerText = inputNumber.value
})

inputDate.addEventListener('input', () => {
    cardDate.innerText = inputDate.value
})

inputCvc.addEventListener('input', () => {
    cardCvc.innerText = inputCvc.value
})
