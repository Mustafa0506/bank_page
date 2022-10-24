import { fetchCurrencies, postTo } from "../modules/useHttp.js";

let form = document.forms.wallet
let next = document.querySelector('.next')
let user = JSON.parse(localStorage.getItem('user'))
// let currInp = document.querySelector('datalist')

// fetchCurrencies()
//     .then(res => reloadCurr(res.currencies))


form.onsubmit = (event) => {
    event.preventDefault()

    let wallet = {
        "id": Math.random(),
        "userid": user?.id
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        wallet[key] = value
    })

    console.log(wallet);
    postTo('cards', wallet)
        .then(res => console.log(res))
    // if(wallet.name.length !== 0 && wallet.currency.length)

}

next.onclick = () => {
    window.location = './wallet/index.html'
}

// const reloadCurr = (currencies) => {
//     console.log(currencies);

//     for(let key in currencies) {
//         let opt = new Option(key, key)

//         currInp.append(opt)
//     }

// }