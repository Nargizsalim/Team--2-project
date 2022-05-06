import { cocktails }  from './data.js';

const main = document.querySelector(".main-content");
const input = document.querySelector("#search");
const searchBtn = document.querySelector("#search-btn");
const cocktailBtn = document.getElementById ("cocktail-btn")
const ordinaryBtn = document.getElementById ("ordinary-btn")
const shotBtn = document.getElementById ("shot-btn")
const coffeeBtn = document.getElementById ("coffee-btn")
const otherBtn = document.getElementById ("other-btn")
const allBtn = document.getElementById("all-btn")
const alcoholicBtn = document.getElementById("alcoholic")
const nonalcoholicBtn = document.getElementById("non-alcoholic")


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

allBtn.addEventListener("click",function(){
    renderData(cocktailsData);
})

cocktailBtn.addEventListener("click", function(){
    let listOfCocktails = []
    cocktailsData.map(items => {
      // console.log(items)
      if(items.strCategory === "Cocktail"){
        listOfCocktails.push(items)
      }
    })
      renderData(listOfCocktails)
  })

shotBtn.addEventListener ("click", function(){
    let listofShots = []
    for (let shot of cocktailsData){
        if(shot.strCategory == "Shot"){
            listofShots.push(shot)
        }
    }
    renderData(listofShots)
})

ordinaryBtn.addEventListener ("click", function(){
    let listofOrdinary = []
    cocktailsData.filter( ordinary => {
      if(ordinary.strCategory == "Ordinary Drink"){
        listofOrdinary.push(ordinary)
      }
    })
      renderData(listofOrdinary)
  })

coffeeBtn.addEventListener ("click", function(){
    let listofcoffee = []
    cocktailsData.forEach(coffee =>{
      if(coffee.strCategory == "Coffee / Tea"){
            listofcoffee.push(coffee)
        }
    })
       renderData(listofcoffee)
})

otherBtn.addEventListener ("click", function(){
    let listofother = []
    for (let other of cocktailsData){
        if(other.strCategory == "Other/Unknown"){
            listofother.push(other)
        }
    }
    renderData(listofother)
})

alcoholicBtn.addEventListener ("click", function(){
    let listofalcoholic = []
    for (let alcoholic of cocktailsData){
        if(alcoholic.strAlcoholic == "Alcoholic"){
            listofalcoholic.push(alcoholic)
        }
    }
    renderData(listofalcoholic)
})

nonalcoholicBtn.addEventListener ("click", function(){
    let listofnonalcoholic = []
    for (let nonalcoholic of cocktailsData){
        if(nonalcoholic.strAlcoholic == "Non alcoholic"){
            listofnonalcoholic.push(nonalcoholic)
        }
    }
    renderData(listofnonalcoholic)
})


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

