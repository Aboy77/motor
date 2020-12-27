const result = document.getElementById("result");
const brand = document.getElementById("brand");
const year = document.getElementById("year");
const min = document.getElementById("min");
const max = document.getElementById("max");
const doors = document.getElementById("doors");
const transmition = document.getElementById("transmition");
const color = document.getElementById("color");
const noResult = document.getElementById("no-result")

eventsListeners()


function eventsListeners() {
    document.addEventListener("DOMContentLoaded", () => {
        loadCars(cars)

        fillSelect()
    })
}

function fillSelect() {
    const max = new Date().getFullYear();
    const min = max - 10;

    for (let i = min; i <= max; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        year.appendChild(option)
    }
}

function loadCars(cars) {
    deletepreviusHTML()
    const row = document.createElement("div");
    row.classList = "cars"
    cars.forEach(car => {
        if (car.id === 2) {
            row.innerHTML += `
        <div class="card">
                    <div class="img">
                        <img src=${car.image} alt="car" width="100%">
                    </div>
                    <div class="info">
                        <h3>${car.brand} ${car.model}</h3>
                        <div class="flex-c">
                            <p><span>year: ${car.year} </span></p> 
                            <p><span>KM: 0KM</span></p>
                            <p><span class="offer">price: $ ${car.price}</span></p>
                        </div>
                        <div class="details">
                            <p class="t-j">${car.information}</p>
                        </div>
                    </div>
                    <div>
                    <a href="#" class="btn">More Info</a>
                    </div>
        </div>
        `;
            result.appendChild(row)
        }
    })
    if (result.firstChild === null) {
        noResult.classList.remove("hide")
    } else {
        noResult.classList = "img hide";
    }
}

let filters = {
    brand: "",
    year: "",
    min: "",
    max: "",
    doors: "",
    transmition: "",
    color: ""
}

brand.addEventListener("change", (e) => {
    filters.brand = e.target.value;

    filterCar()
});

year.addEventListener("change", (e) => {
    filters.year = Number(e.target.value);

    filterCar()
});

min.addEventListener("change", (e) => {
    filters.min = Number(e.target.value);

    filterCar()
});

max.addEventListener("change", (e) => {
    filters.min = Number(e.target.value);

    filterCar()
});

function filterCar() {
    const results = cars.filter(filterBrand).filter(filterYear).filter(filterMin).filter(filterMax)

    loadCars(results)
}

function filterBrand(car) {
    const { brand } = filters;
    if (brand) {
        return car.brand === brand;
    }

    return car;
}

function filterYear(car) {
    const { year } = filters;
    if (year) {
        return car.year === year;
    }

    return car;
}

function filterMin(car) {
    const { min } = filters;
    if (min) {
        return car.price >= min
    }

    return car;
}

function filterMax(car) {
    const { max } = filters;
    if (max) {
        return car.price <= max
    }

    return car;
}

function deletepreviusHTML() {
    if (result.firstChild) {
        result.removeChild(result.firstChild)
    }
}