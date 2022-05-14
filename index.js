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

function renderButtons(arr) {
    let buttons = ""
    for (let i = 0; i < arr.length; i++) {
        buttons += `<button class="service-btn">${arr[i].service}: $${arr[i].amount}</button>`
    }
    buttonContainer.innerHTML = buttons
}

renderButtons(services)
