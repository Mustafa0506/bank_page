import Header from '../modules/layout.js'
import { fetchAll } from '../modules/useHttp.js'

let box = document.querySelector('.transaction1')
let email = document.querySelector('.email')

fetchAll("users")
    .then(res => Header(res))




fetchAll("users")
    .then(res => second_reload(res))

const second_reload = (item) => {
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

let add1 = document.querySelector('.lasttext')
let wallet1 = document.querySelector('.headerBtn2')
add1.onclick = () => {
    window.location.assign('../addtransaction/index.html')
}
wallet1.onclick = () => {
    window.location.assign('../wallet/index.html')
}
let exit = document.querySelector('.exit')
exit.onclick = () => {
    window.location.assign("../Начните с этой папки/registration.html")
}
let wallet3 = document.querySelector('.headerBtn')
wallet3.onclick = () => {
    window.location.assign("../index.html")
}








