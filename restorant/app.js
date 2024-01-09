class Food{
constructor(name,image,price){
    this.name=name
    this.image=image
    this.price=price
}


}
const renderMenuForm=(rootElement,menu)=>{
let form=document.createElement('form')
let fieldset1=document.createElement('fieldset')
let fieldset2=document.createElement('fieldset')
fieldset1.className = 'scheduler-border'
fieldset2.className = 'scheduler-border'

menu.food.forEach(foodData=>{
    let label=document.createElement('label')
    let input=document.createElement('input')
    input.setAttribute("type","checkbox")
    let labelText=document.createTextNode(`${foodData.name}${foodData.price}`)
    // input.type="checkbox"
    label.appendChild(input)
    label.appendChild(labelText)
    fieldset1.appendChild(label)
    form.appendChild(fieldset1)  
})

menu.drinks.forEach(foodData=>{
    let label=document.createElement('label')
    let input=document.createElement('input')
    input.setAttribute("type","checkbox")
    let labelText=document.createTextNode(`${foodData.name}${foodData.price}`)
    // input.type="checkbox"
    label.appendChild(input)
    label.appendChild(labelText)
    fieldset2.appendChild(label)
    form.appendChild(fieldset2)  
})


rootElement.appendChild(form)
}

let data={
    menu:{
        food:[
            new Food("Pizza","images/pizza.jpg",100),
            new Food("Salad","images/salad.jpg",50),
            new Food("Soup","images/soup.jpg",25),],
        drinks:[
            new Food("Juice","images/juice.jpg",20),
            new Food("Water","images/water.jpg",5),
            new Food("Tea","images/tea.jpg",18),
        ]
        
    }
}
const contentSection=document.getElementById("content")
// const section=document.querySelector("#content") or
// const section=document.body.children[1] or
renderMenuForm(contentSection,data.menu)