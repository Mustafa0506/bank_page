import { postTo } from "../modules/useHttp.js";

let form = document.forms.form
let user = JSON.parse(localStorage.getItem('user'))
let transactions = JSON.parse(localStorage.getItem('transactions'))
let next = document.querySelector('.next')
let have_money = +document.querySelector('.have_money')


let today = new Date();
let dd = String(today.getDate())
let mm = String(today.getMonth())
let yy = String(today.getUTCFullYear())
// let d = 

console.log('a');
form.onsubmit = (event) => {
    event.preventDefault()

    let transaction = {
        "id": Math.round(Math.random() * 10000),
        "userid": user?.id,
        "data": `${dd}.${mm}.${yy}`
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        transaction[key] = value
    })

    postTo('transactions', transaction)
        .then(res => console.log(res))

}

next.onclick = () => {
    console.log('a');
    window.location = '../index.html'
}