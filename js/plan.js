const car = document.getElementById("car");
const calculate = document.getElementById("send");
const text = document.getElementById("text");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const salary = document.getElementById("salary");
const error = document.getElementById("error");
const button = document.getElementById("calculate");
const result = document.getElementById("result");
const spinn = document.getElementById("spinn");
const insert = document.getElementById("insert");
const table = document.getElementById("table");
const contain = document.getElementById("contain");
let carSelected;
let carPrice;

// events listeners creation

eventsListeners()

function eventsListeners() {
    document.addEventListener("DOMContentLoaded", showCars)
    calculate.addEventListener("submit", submitAction)
    text.addEventListener("keypress", verifyForm)
    email.addEventListener("keypress", verifyForm)
    tel.addEventListener("keypress", verifyForm)
    salary.addEventListener("keypress", verifyForm)
    car.addEventListener("change", verifySelec)
    result.addEventListener("click", newPlan)
}

// Load all car registered at db.js

function showCars() {
    for (let i = 0; i < cars.length; i++) {
        const option = document.createElement("option");
        let carsList = cars[i]
        option.value = carsList.brand + " " + carsList.model;
        option.setAttribute("data-price", carsList.price)
        option.textContent = carsList.brand + " " + carsList.model;
        car.appendChild(option)
    }

    if (text.value === "" && email.value === "" && tel.value === "" && salary.value === "") {
        button.type = "button";
        button.disabled = true;
    }

    // load plans history saved at session storage

    if (sessionStorage.length > 1) {
        let planST;
        contain.classList.remove("hide");
        table.classList.remove("hide");
        for (let i = 1; i <= sessionStorage.length; i++) {
            let key = sessionStorage.key(i);
            planST = getPlans(key);

            planST.forEach(plan => {
                const tr = document.createElement("tr");
                let m, p, c;
                switch (plan.id) {
                    case 1:
                        m = "12- 24";
                        p = plan.preTwo.preOne + " - " + plan.preTwo.preTwo;
                        c = plan.planTwo.planOneYear + " - " + plan.planTwo.planTwoYear;
                        break;
                    case 2:
                        m = "6";
                        p = plan.pre;
                        c = plan.planO;
                        break;
                    case 3:
                        m = "3";
                        p = plan.pre;
                        c = plan.planO;
                        break;
                    case 4:
                        m = "3";
                        p = plan.pre;
                        c = plan.planO;
                        break;
                    case 5:
                        m = "2";
                        p = plan.pre;
                        c = plan.planO;
                        break;
                }
                tr.innerHTML += `
                <td>${plan.car}</td>
                <td>${plan.salary}</td>
                <td>${m}</td>
                <td>${p}</td>
                <td>${c}</td>
                `;
                insert.appendChild(tr)
            })
        }

        if (sessionStorage.length > 4) {
            let key = sessionStorage.length - 3;
            let name = sessionStorage.key(key)
            sessionStorage.removeItem(name)
        }


    } else {
        contain.classList = "hide";
        table.classList = "hide";
    }
}

// Prototypes for give a estimated plan and change the User Interface when the form is sended

function Plans(amount, car, price) {
    this.amount = amount;
    this.price = price;

    let amountN = Number(amount)
    let priceN = Number(price)

    let planO;
    let planT;

    let data = {

    }

    const div = document.createElement("div");
    div.classList = "card";

    if (amountN <= priceN) {
        if (amountN <= (priceN * 15) / 100) {
            planO = (amountN * 30) / 100;
            planT = (amountN * 20) / 100;

            let preO = priceN - (planO * 12);
            let preT = priceN - (planT * 24);

            data.salary = amountN;
            data.planTwo = {
                planOneYear: planO,
                planTwoYear: planT
            }
            data.preTwo = {
                preOne: preO,
                preTwo: preT
            }
            data.car = car
            data.id = 1




            div.innerHTML = `
            <h2>${car}</h2>
            <h3>One year plan</h3>
            <div>
            <p class="t-c">Deposit : $ <span>${preO}</span></p>
            <p class="t-c">Total month : $ <span>${planO}</span></p>
            </div>

            <h3>Two year plan</h3>
            <div>
            <p class="t-c">Deposit : $ <span>${preT}</span></p>
            <p class="t-c">Total month : $ <span>${planT}</span></p>
            </div>
            <div class="full-width">
            <a class="btn-p f-r m-r-p" id="new">New plan</a>
            </div>
            `;

            savePlans(data)
            result.appendChild(div)

        } else if (amountN > (priceN * 15) / 100 && amountN <= (priceN * 30) / 100) {
            planO = (amountN * 30) / 100;

            let preS = priceN - (planO * 6);

            data.salary = amountN;
            data.planO = planO
            data.pre = preS
            data.car = car
            data.id = 2


            div.innerHTML = `
            <h2>${car}</h2>
            <h3>Six months plan</h3>
            <div>
            <p class="t-c">Deposit : $ <span>${preS}</span></p>
            <p class="t-c">Total month : $ <span>${planO}</span></p>
            </div>
            <div class="full-width">
            <a class="btn-p f-r m-r-p" id="new">New plan</a>
            </div>
            `;
            savePlans(data)
            result.appendChild(div)
        } else if (amountN > (priceN * 30) / 100 && amountN <= (priceN * 60) / 100) {
            planO = (amountN * 30) / 100;

            let preT = priceN - (planO * 3);

            data.salary = amountN;
            data.planO = planO
            data.pre = preT
            data.car = car
            data.id = 3


            div.innerHTML = `
            <h2>${car}</h2>
            <h3>Three months plan</h3>
            <div>
            <p class="t-c">Deposit : $ <span>${preT}</span></p>
            <p class="t-c">Total month : $ <span>${planO}</span></p>
            </div>
            <div class="full-width">
            <a class="btn-p f-r m-r-p" id="new">New plan</a>
            </div>
            `;
            savePlans(data)
            result.appendChild(div)
        } else if (amountN > (priceN * 60) / 100 && amountN <= priceN) {
            planO = (priceN / 3).toFixed(2);

            data.salary = amountN;
            data.planO = planO
            data.car = car
            data.id = 4


            div.innerHTML = `
            <h2>${car}</h2>
            <h3>Three months plan</h3>
            <div>
            <p class="t-c">Total month : $ <span>${planO}</span></p>
            </div>
            <div class="full-width">
            <a class="btn-p f-r m-r-p" id="new">New plan</a>
            </div>
            `;
            savePlans(data)
            result.appendChild(div)
        }
    } else {
        planO = priceN / 2;

        data.salary = amountN;
        data.planO = planO
        data.car = car
        data.id = 5

        div.innerHTML = `
            <h2>${car}</h2>
            <h3>Two months plan</h3>
            <div>
            <p class="t-c">Total month : $ <span>${planO}</span></p>
            </div>
            <div class="full-width">
            <a class="btn-p f-r m-r-p" id="new">New plan</a>
            </div>
            `;
        savePlans(data)
        result.appendChild(div)
    }

}

function UI() {

}

UI.prototype.showMsj = function(msj, clas) {
    const p = document.createElement("p");
    if (clas === "error") {

        p.textContent = msj;
        p.classList = clas;
        setTimeout(() => {
            p.remove()
        }, 3000)
        if (!error.firstChild) {
            error.appendChild(p)
        }
    }
    if (clas === "hide") {
        while (error.firstChild) {
            error.removeChild(error.firstChild)
        }
    }
}

// Verify form

function verifyForm(e) {
    const ui = new UI()
    if (e.target.value.length < 1) {
        e.target.style.borderBottom = "1px solid red";
        ui.showMsj("Must fill the form", "error");
        button.type = "button";
        button.disabled = true;
    } else {
        e.target.style.borderBottom = "1px solid #b1b1b1";
        ui.showMsj("Correct", "hide");
        if (text.value.length > 0 && email.value.length > 0 && tel.value.length > 0 && salary.value.length > 0) {
            button.disabled = false;
            button.type = "submit";
        }
    }
}

function verifySelec(e) {
    if (e.target.value != "s") {
        carSelected = e.target.value;
        carPrice = e.target.options[e.target.selectedIndex].dataset.price;
    }
}

function submitAction(e) {
    e.preventDefault()
    if (car.value === "s") {
        const ui = new UI()
        ui.showMsj("Must select a car", "error");
    } else {
        calculate.style.display = "none";
        spinn.style.display = "block";
        contain.classList = "hide";
        table.classList = "hide";
        setTimeout(() => {
            spinn.style.display = "none";
            const plan = new Plans(salary.value, carSelected, carPrice)
        }, 2000)
    }
}

function savePlans(data) {
    let planST;

    planST = getPlans(data.car)
    planST.push(data)

    sessionStorage.setItem(data.car, JSON.stringify(planST))


}

function getPlans(carName) {
    let planST;
    if (sessionStorage.getItem(carName) === null) {
        planST = []
    } else {
        planST = JSON.parse(sessionStorage.getItem(carName))
    }

    return planST
}

function newPlan(e) {
    if (e.target.classList.contains("btn-p")) {
        console.log(window.location.reload())
    }
}