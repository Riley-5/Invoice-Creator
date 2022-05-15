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

let servicesRequested = []
const buttonContainer = document.querySelector("#button-container")
const taskEl = document.querySelector("#task-el")
const totalEl = document.querySelector("#total-el")
const totalAmount = document.querySelector("#total-amount")
const sendInvoiceBtn = document.querySelector("#sendInvoice-btn")
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
    add the service to the serivesRequested array if the item is not in the array already
*/
function addTask(e) {
    const id = e.target.id
    services.map((serviceItem) => {
        if (id == serviceItem.id && !servicesRequested.includes(serviceItem)) {
            servicesRequested.push(serviceItem)
            renderItems(servicesRequested, id)
        }
    })
}

function renderItems(arr, id) {
    arr.map((serviceItem) => {
        if (serviceItem.id == id) {
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

/*
    Button clicked reset application
*/
sendInvoiceBtn.addEventListener("click", () => {
    servicesRequested = []
    sum = 0
    taskEl.innerHTML = `
        <p>TASK</p>
    `

    totalEl.innerHTML = `
        <p>TOTAL AMOUNT</p>
    `

    totalAmount.innerHTML = `
        <p>TOTAL AMOUNT</p>
    `
})