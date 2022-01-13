window.addEventListener("load", ()=> {

    let formulario = document.querySelector('.formulario-registro')

    formulario.addEventListener('submit', (e)=> {
       
        let errores =[]

        /*---------------------*/
        let nombre = document.querySelector('#nombre')

        if(nombre.value == ''){
            errores.push("El campo 'Nombre' debe estar completo.")
        }else if(nombre.value.length < 2){
            errores.push("El campo 'Nombre' debe tener al menos 2 caracteres|.")
        }
        /*---------------------*/
        let apellido = document.querySelector('#apellido')

        if(apellido.value == ''){
            errores.push("El campo 'Apellido' debe estar completo.")
        }else if(apellido.value.length < 2){
            errores.push("El campo 'Apellido' debe tener al menos 2 caracteres|.")
        }
        /*---------------------*/
        let email = document.querySelector('#email')

        if(email.value == ''){
            errores.push("El campo 'Email' debe estar completo.")
        }
        /*---------------------*/
        let password = document.querySelector('#password')

        if(password.value == ''){
            errores.push("El campo 'Contraseña' debe estar completo.")
        }else if(password.value.length < 8){
            errores.push("El campo 'Contraseña' debe tener al menos 8 caracteres|.")
        }
        /*---------------------*/
        let password2 = document.querySelector('#password')

        if(password2.value == ''){
            errores.push("El campo 'Repeti tu Contraseña' debe estar completo.")
        }else if(password2.value.length < 8){
            errores.push("El campo 'Repeti tu Contraseña' debe tener al menos 8 caracteres|.")
        }
        /*---------------------
        let fotoPerfil = document.querySelector('#fotoPerfil')

        if(fotoPerfil.value == ''){
            alert("El campo 'Password' debe estar completo.")
        }*/


        if(errores.length > 0){
            e.preventDefault()

            let ulErrores = document.querySelector('.errores')
            
            for(var i = 0; i < errores.length; i++){

                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }




    })



})