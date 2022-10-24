import { fetchAll } from './modules/useHttp.js'
import { reload } from './modules/uiFunctions.js'
import Header from './modules/layout.js'
let box = document.querySelector('.transaction')
let wallets = document.querySelector('.wallets')
let hello = document.querySelector('.hello')
let email = document.querySelector('.email')

// Header()

let user = JSON.parse(localStorage.getItem('user'))

fetchAll("users")
    .then(res => Header(res))

fetchAll('cards', '?userid=' + user?.id)
    .then(res => reload(res, wallets))

fetchAll("users")
    .then(res => console.log(res.name))



const second_reload = (item) => {
    hello.innerHTML = `Добро пожаловать, ${item.name} ${item.surname}!`
    email.innerHTML = item.email
    console.log(item);
}


fetchAll("transactions")
    .then(res => third_reload(res))



const third_reload = (arr) => {


    for (let item of arr) {
        let trans = document.createElement('div')
        let id = document.createElement('p')
        let card = document.createElement('p')
        let car = document.createElement('p')
        let sum = document.createElement('p')
        let data = document.createElement('p')

        trans.classList.add('history')
        id.classList.add('text')
        id.innerHTML = item.id
        card.classList.add('a1')
        card.innerHTML = item.card
        car.classList.add('b1')
        car.innerHTML = item.car
        sum.classList.add('c1')
        sum.innerHTML = item.sum
        data.classList.add('d1')
        data.innerHTML = item.data

        box.append(trans)
        trans.append(id, card, car, sum, data)
    }
}

