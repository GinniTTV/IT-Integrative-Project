const onSubmitContact = e => {
    e.preventDefault();
    let validForm = true;
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("mail");
    const commentInput = document.getElementById("comment");

    const nameError = document.getElementById("nameError")
    const emailError = document.getElementById("mailError")

    // Nombre y datos personales :)
    if (validateStrings(nameInput.value)) {
        const validStg = validateStgLength(nameInput.value, 3, 20);
        if (validStg === true) {
            nameInput.ariaInvalid = false
            nameError.innerText = ""
            nameError.style.display = "none"
        } else {
            nameInput.ariaInvalid = true
            nameError.innerText = validStg
            nameError.style.display = "block"
            validForm = false
        }
    } else {
        nameInput.ariaInvalid = true
        nameError.innerText = "Es necesario que coloque los carácteres alfanuméricos correspondientes"
        nameError.style.display = "block"
        validForm = false
    }

    if(validForm && commentInput.value) {
        const newComment = {
            name: nameInput.value,
            email: emailInput.value,
            comment: commentInput.value
        };
        const stgComment = JSON.stringify(newComment);
        localStorage.setItem("message", stgComment)
        alert("Comentarios enviados de manera correcta")
    } else alert("Usted debe completar el comentario de forma correcta para poder enviarlo")


    //Email de contacto :) 
    if (validateEmails(emailInput.value)) {
        emailInput.ariaInvalid = false
        emailError.innerText = ""
        emailError.style.display = "none"
    } else {
        emailInput.ariaInvalid = true
        emailError.innerText = "Ingrese el email correcto que corresponda porfavor"
        emailError.style.display = "block"
        validForm = false
    }
    
    
}