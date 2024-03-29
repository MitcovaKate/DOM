class MenuItem{
    constructor(name,image,price){
        this.name=name
        this.image=image
        this.price=price
    }
    }
class Food extends MenuItem{
}
class Drink extends MenuItem{
}

let data={
    menu:{
        food:[
            new Food("Pizza","images/pizza.jpg",100),
            new Food("Salad","images/salad.jpg",50),
            new Food("Soup","images/soup.jpg",25),],
        drinks:[
            new Drink("Juice","images/juice.jpg",20),
            new Drink("Water","images/water.jpg",5),
            new Drink("Tea","images/tea.jpg",18),
        ]
        
    }
}

// rendering//////////////////////////////////
// input
const renderMenuItem=(menuItem,parentElement,handler)=>{
    let label=document.createElement('label')
    let input=document.createElement('input')
    // input.type="checkbox"
    input.setAttribute("type","checkbox")
    let labelText=document.createTextNode(
        `${menuItem.name} ${menuItem.price}`)
    label.appendChild(input)

// loose coupling
    input.addEventListener('change',handler)

    label.appendChild(labelText)
   parentElement.appendChild(label)
}
// fieldset
const renderItemSet=(title)=>{
    let fieldset=document.createElement('fieldset')
    fieldset.className = 'scheduler-border'
    let legend=document.createElement('legend')
    let labelText=document.createTextNode(title)
    legend.appendChild(labelText)
    fieldset.appendChild(legend)
    return fieldset
}

// form
const renderMenuForm=(rootElement,menu)=>{
let form=document.createElement('form')
let foodSet=renderItemSet('food')
let drinkSet=renderItemSet('drinks')
menu.food.forEach(foodData=>renderMenuItem(foodData,foodSet,toggleMenuItemHandler))
menu.drinks.forEach(drinkData=>renderMenuItem(drinkData,drinkSet,toggleMenuItemHandler))  
     form.appendChild(foodSet) 
     form.appendChild(drinkSet) 
    rootElement.appendChild(form)  
}
// div under input
const renderMenuItemQuantity=(decHandler,incHandler)=>{
    let div=document.createElement('div')
let btnDec=document.createElement('button')
btnDec.addEventListener('click',decHandler)
btnDec.innerText="-"
let inputQ=document.createElement('input')
inputQ.value=1
let btnInk=document.createElement('button')
btnInk.addEventListener('click',incHandler)
btnInk.innerText="+"

div.appendChild(btnDec)
div.appendChild(inputQ)
div.appendChild(btnInk)
return div
}


// events///////////////////
const toggleMenuItemHandler=(event)=>{
let toggledInput=event.target
let label=toggledInput.parentElement
if(toggledInput.checked){
let menuItemQuantity=renderMenuItemQuantity(decQuantityHandler,incQuantityHandler)
label.after(menuItemQuantity)}
else{label.parentElement.removeChild(label.nextElementSiblings)}

}

const incQuantityHandler=(event)=>{event.preventDefault()}
const decQuantityHandler=(event)=>{event.preventDefault()}
// ///////////////////////////

const contentSection=document.getElementById("content")
// const section=document.querySelector("#content") or
// const section=document.body.children[1] or
renderMenuForm(contentSection,data.menu)
