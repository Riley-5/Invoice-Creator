let services = [
    {
        service: "Wash Car",
        amount: 10
    },
    {
        service: "Mow Lawn",
        amount: 20
    },
    {
        service: "Pull Weeds",
        amount: 30
    }
]

let servicesRequested = []
const buttonContainer = document.querySelector("#button-container")

/*
    Loops through the services array 
    returns each service in a button
*/
services.map((serviceItem) => {
    (
        buttonContainer.innerHTML += `<button class="service-btn">${serviceItem.service} $${serviceItem.amount}</button>`
    )
})


/*
    Click on button
    add 
*/

