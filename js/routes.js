
const mainElement = document.querySelector("main");

const onLoadTemplate = template => {
    console.log(template)
    if (template !== "home") {
        location.hash = template
    } else {
        location.hash = ""
    }
    const xhr = new XMLHttpRequest;
    xhr.open("GET", `../templates/${template}.html`)
    xhr.addEventListener( "load", () => mainElement.innerHTML = xhr.response )
    xhr.send()
} // void

const initialLoadContent = () => {
    const { hash } = location;
    const parsedHash = hash.slice(1)
    // onLoadTemplate(parsedHash || "home")
    onLoadTemplate((parsedHash === "upload" || parsedHash === "contact") ? parsedHash : "home")
}

document.addEventListener("DOMContentLoaded", initialLoadContent)

window.addEventListener("popstate", initialLoadContent)

// Conditional Lazy

// a && b => si "a" es false -> "b" es ignorado
// a || b => si "a" es true -> "b" es ignorado

// Falsy y Truthy

// Falso: "" - 0 - undefined - null - NaN
// Verdadero: "asdfsd" - 123 - {} - [] - funtion