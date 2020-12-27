const form = document.getElementById("send")
const boton = document.getElementById("calculate");
const text = document.getElementById("text");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const option = document.getElementById("questions");
const spinner = document.getElementById("spinn");
const error = document.getElementById("error");
const fill = document.getElementById("fill");
const send = document.getElementById("sent");

eventsListeners()

function eventsListeners() {
    document.addEventListener("DOMContentLoaded", botonDisabled)
    text.addEventListener("input", verifyForm)
    email.addEventListener("input", verifyForm)
    tel.addEventListener("input", verifyForm)
    option.addEventListener("input", verifyOption)
    form.addEventListener("submit", sendSpinner)
}

function botonDisabled() {
    if (option.value === "s") {
        boton.type = "button";
        boton.disabled = true;
    }
}

function verifyForm(e) {
    let tipo;
    if (e.target.value.length < 2) {
        tipo = e.target;
        tipo.style.borderBottom = "1px solid red";
    } else {
        tipo = e.target;
        tipo.style.borderBottom = "1px solid #b1b1b1";
    }

    if (e.target.type === "email") {
        if (e.target.value.indexOf("@") === -1) {
            tipo = e.target;
            tipo.style.borderBottom = "1px solid red";
        } else {
            tipo = e.target;
            tipo.style.borderBottom = "1px solid #b1b1b1";
        }
    }

    if (text.value != "" && email.value != "" && tel.value != "") {
        boton.type = "submit";
        boton.disabled = false;
    }
}

function verifyOption(e) {
    if (e.target.value === "s") {
        boton.type = "button";
        boton.disabled = true;
    } else {
        boton.type = "submit";
        boton.disabled = false;
    }
}

function sendSpinner(e) {
    e.preventDefault();
    if (option.value === "s") {
        boton.type = "button";
        boton.disabled = true;
        const div = document.createElement("div");
        div.classList = "error-card";
        div.textContent = "Must select an option"
        error.appendChild(div);
        setTimeout(() => {
            error.remove()
        }, 2000)
        option.style.border = "1px solid red";
        setTimeout(() => {
            option.style.border = "1px solid #D1D1D1"
        }, 2000)
    } else {
        spinner.style.display = "block";
        fill.style.display = "none";
        setTimeout(() => {
            spinner.style.display = "none";
            send.style.display = "block";
            setTimeout(() => {
                send.style.display = "none";
                window.location.reload();
            }, 2000)
        }, 2000)
    }
}