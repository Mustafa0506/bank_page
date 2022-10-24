import { reload } from '../modules/uiFunctions.js'
import Header from '../modules/layout.js'
import { fetchAll } from '../modules/useHttp.js'

let email = document.querySelector('.email')

// Header()

fetchAll("users")
    .then(res => Header(res))


let wallets = document.querySelector('.walletsBox')

let cards = JSON.parse(localStorage.getItem('cards')) || [] 


reload(cards, wallets)

fetchAll("users")
    .then(res => second_reload(res))

const second_reload = (item) => {
    email.innerHTML = item.email
    console.log(item);
}