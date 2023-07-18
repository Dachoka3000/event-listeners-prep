// let username = document.querySelector("#username")
// //console.log(username.value)
// let button = document.getElementById("clickButton")
// button.addEventListener("click",function(){
//     console.log(username.value)
//     let paragraph = document.createElement("p")
//     paragraph.innerText = `Hi ${username.value}, welcome to my website`

//     let parent = document.getElementById("resultSection")
//     parent.appendChild(paragraph)
// } )

let form = document.getElementById("profitForm")
let revenue = document.querySelector("#revenue")
let expenses = document.querySelector("#expenses")
let button = document.getElementById("submitButton")

form.addEventListener("submit", function(event){
    event.preventDefault()
    console.log(revenue.value)
    const profit = parseInt(revenue.value) - parseInt(expenses.value)

    document.body.append(`Your profit is: ${profit}`)
})

