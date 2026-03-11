const productList = document.querySelector('#product-list ul')

const url = 'https://dummyjson.com/products';

fetch(url).then((response) => {

    return response.json()

}).then((json) => {

for(let i = 0; i < json.products.length; i++) {
    productList.innerHTML += `
            <li>
                <span>${json.products[i].title}</span>
                <span>${json.products[i].price}</span>
            </li>
    `
}
    
});

// const request = fetch(url).then(response => response.json());
// request.then(json => console.log(json))


// fetch(url).then((response) => {
//     response.json().then((json) => {
//         console.log(json);
//     })
// });


// console.log("Ante do set timeout");

// setTimeout(() => {
//     console.log("Dentro do set timeout")
// }, 2000);

// let interval = setInterval(() => {
//     console.log("Set Interval " + Math.random())
// }, 2000);

// let timeout = setTimeout(() => {
//     clearInterval(interval);
//     console.log("Parou o interval")
// }, 6000);

// clearTimeout(timeout);


// for(let i = 0; i <= 100000; i++) {
//     console.log(i);
// }