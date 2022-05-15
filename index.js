let services = [
    {
        id: 1,
        service: "Wash Car",
        amount: 10
    },
    {
        id: 2,
        service: "Mow Lawn",
        amount: 20
    },
    {
        id: 3,
        service: "Pull Weeds",
        amount: 30
    }
]

const buttonContainer = document.querySelector("#button-container")
const taskEl = document.querySelector("#task-el")
const totalEl = document.querySelector("#total-el")
const totalAmount = document.querySelector("#total-amount")
let sum = 0

/*
    Loops through the services array 
    returns each service in a button
*/
services.map((serviceItem) => {
    (
        buttonContainer.innerHTML += `
            <button id="${serviceItem.id}" class="service-btn" onclick="addTask(event)">
                ${serviceItem.service}: $${serviceItem.amount}
            </button>
        `
    )
})

/*
    Click on a service button
    add the total of services added to the TOTAL AMOUNT
*/
function addTask(e) {
    const id = e.target.id
    services.map((serviceItem) => {
        if (id == serviceItem.id) {
            taskEl.innerHTML += `
                <p>${serviceItem.service}</p>
            `
            totalEl.innerHTML += `
                <p>${serviceItem.amount}</p>
            `
            sum += serviceItem.amount
        }
    })
    totalAmount.innerHTML = `
        <p>TOTAL AMOUNT</p>
        <p>${sum}</p>
    `
}






