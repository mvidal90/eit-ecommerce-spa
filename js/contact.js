
const inputsArray = ["name", "email", "subject", "body"]

const contactSubmit = (event) => {
    event.preventDefault()
    const values = {};
    let isValid = true

    for (let index = 0; index < inputsArray.length; index++) {
        const inputName = inputsArray[index];
        const fieldElement = document.getElementById(inputName);
        if (fieldElement.value.length > 3) {
            values[inputName] = fieldElement.value
        } else {
            isValid = false
        }
    }

    if (isValid) {
        console.log(values)
    }
}