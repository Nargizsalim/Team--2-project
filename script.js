import { cocktails }  from './data.js';

const main = document.querySelector(".main-content");
const input = document.querySelector("#search");
const searchBtn = document.querySelector("#search-btn");
const cocktailBtn = document.getElementById ("cocktail-btn")
const ordinaryBtn = document.getElementById ("ordinary-btn")
const shotBtn = document.getElementById ("shot-btn")
const coffeeBtn = document.getElementById ("coffee-btn")
const otherBtn = document.getElementById ("other-btn")


let cocktailsData= cocktails;
input.addEventListener('input', function(event){
    const name = event.target.value
    let filteredData = cocktailsData.filter((el)=>{
    return el.strDrink.toLowerCase().includes(name)
    })
    console.log (filteredData, "filtered")
    renderData(filteredData);
})

function renderData(cocktailsData){
    main.innerHTML = ''
    cocktailsData.map((item)=>{
        return createCocktails(item)
    })
}
renderData(cocktailsData);

// cocktailBtn.addEventListener("click", function(){
//     cocktailsData.sort( )
    





// function renderData(cocktails) {
//     for(let item of cocktails) {
//         createCocktails(item)
//         // console.log(item, "el")
//     }
// }
// renderData(cocktailsData);

function createCocktails(item) {
    const el = `
    <div id='${item.idDrink}' class="cocktails-item">
       <div class="img-wrapper">
       <img src='${item.strDrinkThumb}' alt="">
       <p class="category-type">${item.strCategory}</p>
       </div>
       <p class="cocktail-name">${item.strDrink}</p>
       <span>${item.strAlcoholic}</span>
    </div> `
    main.innerHTML += el
}

