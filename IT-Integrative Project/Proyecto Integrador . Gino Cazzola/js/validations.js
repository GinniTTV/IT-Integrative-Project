// Nombre * descripcion corta * marca y Categoría //


const validateStrings = (string) => {
    const regex = new RegExp("^[A-Za-z Ññ]+$")
    return regex.test(string)
}

const validateStgLength = (stg, minLength, maxLength) => {
    if (stg.length < minLength) {
        return `El valor requerido debe tener por lo menos ${minLength} caracteres.`
    } else if (stg.length > maxLength) {
        return `El valor que requiere debe tener no más de ${maxLength} caracteres.`
    } else {
        return true
    }
}

// Precio * Stock * Edad desde (mín) hasta (máx) //

const validatePostiveNumber = num => num >= 0

const validateInt = num => Number.isInteger(num)

//...........................................................//


// Fotos :) *

// Emails de contacto :)

const validateEmails = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(email)
}